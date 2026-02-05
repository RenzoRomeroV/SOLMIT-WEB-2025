import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Inicio'
  },
  {
    path: 'Inicio',
    loadComponent: () => import('./modules/inicio/inicio.component').then(m => m.InicioComponent)
  },
  {
    path: 'quienes-somos',
    loadComponent: () => import('./modules/quienes-somos/quienes-somos.component').then(m => m.QuienesSomosComponent)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./modules/servicios/servicios.component').then(m => m.ServiciosComponent)
  },
  {
    path: 'casos-exito',
    loadComponent: () => import('./modules/casos-exito/casos-exito.component').then(m => m.CasosExitoComponent)
  },
  {
    path: 'trabaja-con-nosotros',
    loadComponent: () => import('./modules/trabaja-con-nosotros/trabaja-con-nosotros.component').then(m => m.TrabajaConNosotrosComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./modules/contacto/contacto.component').then(m => m.ContactoComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
