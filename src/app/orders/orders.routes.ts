import { Routes } from '@angular/router';
import { DashboardVentasComponent } from './pages/dashboard-ventas/dashboard-ventas.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

export const ORDERS_ROUTES: Routes = [
  // TODO: crear rutas para crear pedidos y ver sus estadisticas
  // {path: '', component: },
  {path: '', component: OrdersPageComponent },
  {path: 'dashboard', component: DashboardVentasComponent },
];  
