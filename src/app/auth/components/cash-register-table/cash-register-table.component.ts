import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

import { Caja } from '../../model/caja.interface';
import { CashSwitchComponent } from '../cash-switch/cash-switch.component';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { CashService } from '../../services/cash.service';

@Component({
  selector: 'cash-register-table',
  standalone: true,
  imports: [
    ButtonModule,
    CashSwitchComponent,
    CardModule,
    TableModule,
    DeleteButtonComponent,
  ],
  templateUrl: './cash-register-table.component.html',
  styleUrl: './cash-register-table.component.css',
})
export class CashRegisterTableComponent implements OnInit {
  cajas: Caja[] = [];

  constructor(private cashService: CashService) {}

  ngOnInit(): void {
    this.cashService.cajas$.subscribe((data) => {
      this.cajas = data;
    });
    this.loadCajas();
  }

  loadCajas(): void {
    this.cashService.getCajas();
  }

  onButtonEditClick(cash: Caja) {
    this.cashService.emitCash(cash);
  }
}
