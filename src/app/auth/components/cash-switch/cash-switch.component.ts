import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

import { Caja } from '../../model/caja.interface';
import { CashService } from '../../services/cash.service';

@Component({
  selector: 'cash-switch',
  standalone: true,
  imports: [FormsModule, InputSwitchModule],
  templateUrl: './cash-switch.component.html',
  styleUrl: './cash-switch.component.css',
})
export class CashSwitchComponent {
  @Input()
  caja!: Caja;

  constructor(private cashService: CashService) {}

  changeStatus() {
    this.cashService.editarCaja(this.caja);
  }
}
