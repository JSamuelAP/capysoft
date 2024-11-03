import { Component, } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { CardLoginComponent } from '../../components/login-card/login-card.component';

@Component({
  selector: 'auth-login-page',
  standalone: true,
  imports: [
    CardLoginComponent,
    LoginFormComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {}
  