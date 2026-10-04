import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../secciones/site-header/site-header';
import { Hero } from '../secciones/hero/hero';
import { ScrollStoryComponent } from '../secciones/scroll-story/scroll-story';
@Component({
  selector: 'app-home',
  imports: [SiteHeaderComponent, Hero, ScrollStoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}