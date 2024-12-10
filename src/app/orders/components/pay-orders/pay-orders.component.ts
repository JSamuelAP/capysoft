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

import { ProductOrder } from '../../model/product.interface';
import { OrderService } from '../../services/order.service';
import { cabeceraOrden } from '../../model/cabeceraOrden.interface';
import { OrdersAmmountComponent } from '../orders-ammount/orders-ammount.component';
import { cuerpoOrden } from '../../model/cuerpoOrden.interface';

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
  providers: [ConfirmationService, MessageService, OrdersAmmountComponent],
  templateUrl: './pay-orders.component.html',
  styleUrl: './pay-orders.component.css',
})
export class PayOrdersComponent {
  @Input() total!: number; // Total sin propina
  @Input() products!: ProductOrder[];
  @Output() limpiarProductos = new EventEmitter<void>();
  baseTotal: number = 0; // Total incluyendo propina
  propina: number = 0;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private orderService: OrderService,
    private orderAmmount : OrdersAmmountComponent
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
        const cabecera: cabeceraOrden = {
          numOrden: 0,
          usuarios: '1',
          totalPrecio: this.baseTotal,
          propina: this.propina,
          fecha: new Date().toISOString().split('T')[0],
          hora: new Date().toTimeString().split(' ')[0],
        };
 
        this.orderService.postCabeceraOrden(cabecera).subscribe({
          next: (responseCabecera) => {
  
            this.products.forEach((product) => {
              const cuerpoOrden: cuerpoOrden = {
                idCuerpo: 0,
                num_orden: responseCabecera.numOrden, 
                idProducto: product.idProducto,
                nombreProducto: product.nombreProducto,
                cantidadProducto: product.cantidadProducto,
              };
              this.orderAmmount.enviarCuerpoOrden(cuerpoOrden);
            });
  
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
          error: (err) => {
            console.error('Error al enviar la cabecera:', err);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'No se pudo completar la venta. Intente nuevamente.',
              life: 3000,
            });
          },
        });
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
