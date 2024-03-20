import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'tab1',
        loadComponent: () => import('./tab1/tab1.page').then( m => m.Tab1Page)
      },
      {
        path: 'tab2',
        loadComponent: () => import('./tab2/tab2.page').then( m => m.Tab2Page)
      },
    ]
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
