import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../secciones/site-header/site-header';
import { Hero } from '../secciones/hero/hero';
import { ScrollStoryComponent } from '../secciones/scroll-story/scroll-story';
import { Services } from '../secciones/services/services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  imports: [SiteHeaderComponent, Hero, ScrollStoryComponent, Services],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  refreshScroll(): void {
    ScrollTrigger.refresh();
  }
}