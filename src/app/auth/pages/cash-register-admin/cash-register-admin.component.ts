import { Component } from '@angular/core';

import { CashRegisterFormComponent } from '../../components/cash-register-form/cash-register-form.component';
import { CashRegisterTableComponent } from '../../components/cash-register-table/cash-register-table.component';

@Component({
  selector: 'cash-register-admin',
  standalone: true,
  imports: [CashRegisterFormComponent, CashRegisterTableComponent],
  templateUrl: './cash-register-admin.component.html',
  styleUrl: './cash-register-admin.component.css',
})
export class CashRegisterAdminComponent {}
