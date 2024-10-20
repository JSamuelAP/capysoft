import { Routes } from '@angular/router';

import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductsAdminPageComponent } from './pages/products-admin-page/products-admin-page.component';

export const PRODUCTS_ROUTES: Routes = [
  { path: '', component: ProductsPageComponent },
  { path: 'admin', component: ProductsAdminPageComponent },
];
