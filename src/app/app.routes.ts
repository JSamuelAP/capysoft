import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.routes').then((m) => m.PRODUCTS_ROUTES),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.routes').then((m) => m.ORDERS_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
