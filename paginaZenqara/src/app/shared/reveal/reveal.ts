import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';
@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  ngAfterViewInit(): void {
    const el = this.element.nativeElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    el.classList.add('reveal-ready');
    this.observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        el.classList.add('is-visible');
        this.observer?.disconnect();
      }
    }, { threshold: 0.08 });
    this.observer.observe(el);
  }
  ngOnDestroy(): void { this.observer?.disconnect(); }
}