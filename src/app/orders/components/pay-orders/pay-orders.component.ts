import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';

import { Product } from '../../model/product.interface';

@Component({
  selector: 'pay-orders',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    InputNumberModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './pay-orders.component.html',
  styleUrl: './pay-orders.component.css',
})
export class PayOrdersComponent {
  @Input() total!: number; // Total sin propina
  @Input() products!: Product[];
  @Output() limpiarProductos = new EventEmitter<void>();
  baseTotal: number = 0; // Total incluyendo propina
  propina: number = 0;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.baseTotal = this.total;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['total']) {
      this.baseTotal = this.total + this.propina;
    }
  }

  actualizarTotalConPropina = () => {
    this.baseTotal = this.total + (this.propina || 0);
  };

  pagarCuenta = () => {
    this.confirmationService.confirm({
      header: '¿Deseas concluir la venta?',
      message: 'Total a pagar: $' + this.baseTotal,
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Exitosa.',
          detail: 'Venta exitosa.',
          life: 3000,
        });
        setTimeout(() => {
          this.LimpiarCuenta();
        }, 1000);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Cancelada',
          detail: 'Venta cancelada.',
          life: 3000,
        });
      },
    });
  };

  LimpiarCuenta = () => {
    this.baseTotal = 0;
    this.propina = 0;
    this.total = 0;
    this.products = [];
    this.limpiarProductos.emit();
  };
}
