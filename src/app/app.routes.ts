import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'brunei',
    loadComponent: () => import('./brunei/brunei.page').then( m => m.BruneiPage)
  },
  {
    path: 'tutong',
    loadComponent: () => import('./tutong/tutong.page').then( m => m.TutongPage)
  },
  {
    path: 'belait',
    loadComponent: () => import('./belait/belait.page').then( m => m.BelaitPage)
  },
  {
    path: 'temburong',
    loadComponent: () => import('./temburong/temburong.page').then( m => m.TemburongPage)
  },
];
