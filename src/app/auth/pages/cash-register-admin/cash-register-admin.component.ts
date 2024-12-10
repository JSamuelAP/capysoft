import { Component, OnInit } from '@angular/core';

import { CashRegisterFormComponent } from '../../components/cash-register-form/cash-register-form.component';
import { CashRegisterTableComponent } from '../../components/cash-register-table/cash-register-table.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cash-register-admin',
  standalone: true,
  imports: [CashRegisterFormComponent, CashRegisterTableComponent],
  templateUrl: './cash-register-admin.component.html',
  styleUrl: './cash-register-admin.component.css',
})
export class CashRegisterAdminComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAdmin()) this.router.navigate(['products']);
  }
}
