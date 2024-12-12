import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [
    CommonModule,
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
  isError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin = () => {
    this.authService.login(this.usuario, this.password).subscribe({
      next: (data) => {
        this.authService.setUser(data);
        this.router.navigate(['/products']);
      },
      error: () => {
        this.isError = true;
      },
    });
  };
}
