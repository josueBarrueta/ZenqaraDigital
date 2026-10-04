import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'servicios',
    loadComponent: () => import('./servicios/servicios.component').then(m => m.ServiciosComponent)
  },
  {
    path: 'como-trabajamos',
    loadComponent: () => import('./como-trabajamos/como-trabajamos.component').then(m => m.ComoTrabajamosComponent)
  },
  {
    path: 'hablemos',
    loadComponent: () => import('./hablemos/hablemos.component').then(m => m.HablemosComponent)
  }
];