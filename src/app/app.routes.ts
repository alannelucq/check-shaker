import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () => import('./views/check-list-detail/check-list-detail.component'),
}];
