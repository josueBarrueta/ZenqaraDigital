import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../secciones/site-header/site-header';
import { Hero } from '../secciones/hero/hero';
@Component({
  selector: 'app-home',
  imports: [SiteHeaderComponent, Hero],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}