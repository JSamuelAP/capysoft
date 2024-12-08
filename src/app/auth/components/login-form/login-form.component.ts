import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    ButtonModule,
    FormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin = () => {
    if (!this.authService.login(this.usuario, this.password)) {
      // TODO: Mostrar error
      console.error('esta mal');
    } else {
    }
  };
}
