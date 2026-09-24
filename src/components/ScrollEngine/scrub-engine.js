/**
 * lets-scroll Scrub Engine
 * Lightweight, 60fps/120fps scroll-scrubbing engine for smooth cinematic progress & interactive drive-through
 */

export class ScrubEngine {
  constructor(options = {}) {
    this.target = options.target || document.documentElement;
    this.progressBar = options.progressBar || null;
    this.carScrubber = options.carScrubber || null;
    this.roadPath = options.roadPath || null;
    this.currentProgress = 0;
    this.targetProgress = 0;
    this.lerpFactor = options.lerpFactor || 0.12;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.rafId = null;
    this.callbacks = [];

    this.init();
  }

  init() {
    if (this.isReducedMotion) {
      if (this.progressBar) this.progressBar.style.display = 'none';
      return;
    }

    this.onScroll = this.onScroll.bind(this);
    this.update = this.update.bind(this);

    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll, { passive: true });

    // Initial calculation
    this.onScroll();
    this.rafId = requestAnimationFrame(this.update);
  }

  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.targetProgress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
  }

  update() {
    // Lerp progress for ultra-smooth fluid motion
    const diff = this.targetProgress - this.currentProgress;
    if (Math.abs(diff) > 0.0005) {
      this.currentProgress += diff * this.lerpFactor;
    } else {
      this.currentProgress = this.targetProgress;
    }

    // Update Top Progress Bar
    if (this.progressBar) {
      this.progressBar.style.transform = `scaleX(${this.currentProgress})`;
    }

    // Update Scrub Elements (like journey markers or car indicators)
    if (this.carScrubber) {
      const percent = (this.currentProgress * 100).toFixed(2);
      this.carScrubber.style.setProperty('--scrub-percent', `${percent}%`);
      this.carScrubber.style.transform = `translateX(${this.currentProgress * 85}%)`;
    }

    // Notify any custom subscribers
    for (let i = 0; i < this.callbacks.length; i++) {
      this.callbacks[i](this.currentProgress);
    }

    this.rafId = requestAnimationFrame(this.update);
  }

  onProgress(fn) {
    this.callbacks.push(fn);
  }

  destroy() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
