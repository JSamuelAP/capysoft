import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'cash-register-form',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
  ],
  templateUrl: './cash-register-form.component.html',
  styleUrl: './cash-register-form.component.css',
})
export class CashRegisterFormComponent {
  titulo: string = 'Dar de alta caja';
}
