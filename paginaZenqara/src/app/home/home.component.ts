import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../secciones/site-header/site-header';
import { Hero } from '../secciones/hero/hero';
import { ScrollStoryComponent } from '../secciones/scroll-story/scroll-story';
import { Services } from '../secciones/services/services';
import { Process } from '../secciones/process/process';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WebTypes } from '../secciones/web-types/web-types';
import { Maintenance } from '../secciones/maintenance/maintenance';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  imports: [SiteHeaderComponent, Hero, ScrollStoryComponent, Services, Process, WebTypes, Maintenance],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  refreshScroll(): void {
    ScrollTrigger.refresh();
  }
}