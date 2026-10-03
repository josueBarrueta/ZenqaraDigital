import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../secciones/site-header/site-header';

@Component({
  selector: 'app-home',
  imports: [SiteHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}