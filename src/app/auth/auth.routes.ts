import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const AUTH_ROUTES: Routes = [
  // TODO: crear rutas para el login y registro de cajas
  // {path: 'login', component: },
  // {path: 'register', component: }
  {path:'login', component:LoginPageComponent},
];
