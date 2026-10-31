import { Routes } from '@angular/router';

export const routes: Routes = [

  {
   path: 'utl',
    children: [
      {
        path: 'alumnos',
        loadComponent: () =>
          import('./utl/ABCAlumnos/alumnos/alumnos').then(
            (c) => c.Alumnos
          )
      },
      {
        path: 'maestros',
        loadComponent: () =>
          import('./utl/ABCMaestros/maestros/maestros').then(
            (c) => c.Maestros
          )
      },
    ]
  },
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
      {
        path: 'ventas',
        loadComponent: () => import('./escuela/ventas/ventas').then(c => c.Ventas)
      },
    ]
  },
  { path: '', redirectTo: 'admin', pathMatch: 'full' }
]; 