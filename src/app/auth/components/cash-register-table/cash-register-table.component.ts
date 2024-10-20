import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

import { Caja } from '../../model/caja.interface';
import { CashSwitchComponent } from '../cash-switch/cash-switch.component';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';

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
  cajas!: Caja[];

  ngOnInit(): void {
    this.cajas = [
      {
        numero: '001',
        estado: true,
      },
      {
        numero: '002',
        estado: false,
      },
      {
        numero: '003',
        estado: true,
      },
      {
        numero: '004',
        estado: true,
      },
    ];
  }
}
