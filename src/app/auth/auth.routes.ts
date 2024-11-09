import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CashRegisterAdminComponent } from './pages/cash-register-admin/cash-register-admin.component';
import { LayoutComponent } from '../shared/components/layout/layout.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'register',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CashRegisterAdminComponent,
      },
    ],
  },
  { path: 'login', component: LoginPageComponent },
];
