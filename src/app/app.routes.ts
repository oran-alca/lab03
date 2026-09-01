import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Product } from './product/product';
import { Profile } from './profile/profile';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'products',
    component: Product,
  },
  {
    path: 'profile',
    component: Profile,
  },
];
