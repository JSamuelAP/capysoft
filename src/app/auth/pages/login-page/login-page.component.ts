import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { CardLoginComponent } from '../../components/login-card/login-card.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login-page',
  standalone: true,
  imports: [CardLoginComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.logout();
  }
}
