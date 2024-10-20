import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'auth-login-page',
  standalone: true,
  imports: [
    CardModule,
    PasswordModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ButtonModule
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  usuario: string = '';

  password: string = '';

  retorna = () => {
    const datos = {usuario: this.usuario, password: this.password}
    console.log(datos);
    return datos;
  }

}
