import { Routes } from '@angular/router';
import { DashboardVentasComponent } from './pages/dashboard-ventas/dashboard-ventas.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

export const ORDERS_ROUTES: Routes = [
  { path: '', component: OrdersPageComponent },
  { path: 'dashboard', component: DashboardVentasComponent },
];
