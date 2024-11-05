import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CashRegisterAdminComponent } from './pages/cash-register-admin/cash-register-admin.component';


export const AUTH_ROUTES: Routes = [
  // TODO: crear rutas para el login y registro de cajas
  // {path: 'login', component: },
  {path:'register', component:CashRegisterAdminComponent},
  {path:'login', component:LoginPageComponent},
];
