import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'formulario',
    children: [
      {
        path: 'distancia',
        loadComponent: () => import('./formulario/distancia/distancia').then(c => c.Distancia)
      },
      {
        path: 'zoodiaco',
        loadComponent: () => import('./formulario/zoodiaco/zoodiaco').then(c => c.Zoodiaco)
      }
    ]
  },
  {
    path: 'escuela',
    children: [
      {
        path: 'lista-escuela',
        loadComponent: () => import('./escuela/lista-escuela/lista-escuela').then(c => c.ListaEscuela)
      },
      {
        path: 'cinepolis',
        loadComponent: () => import('./escuela/cinepolis/cinepolis').then(c => c.Cinepolis)
      },
    ]
  },
  { path: '', redirectTo: 'admin', pathMatch: 'full' }
]; 