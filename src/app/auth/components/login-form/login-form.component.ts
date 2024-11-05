import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  usuario: string = '';

  password: string = '';
  
  retorna = () => {
    const datos = {usuario: this.usuario, password: this.password}
    console.log(datos);
    return datos;
  }
}
