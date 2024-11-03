import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { LoginFormComponent } from '../login-form/login-form.component';
@Component({
  selector: 'login-card',
  standalone: true,
  imports: [
    CardModule,
    LoginFormComponent,
  ],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class CardLoginComponent {

}
