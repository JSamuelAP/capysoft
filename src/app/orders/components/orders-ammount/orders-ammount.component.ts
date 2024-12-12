import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { OrderService } from '../../services/order.service';
import { cuerpoOrden } from '../../model/cuerpoOrden.interface';
import { endWith } from 'rxjs';

@Component({
  selector: 'orders-ammount',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './orders-ammount.component.html',
  styleUrl: './orders-ammount.component.css',
})
export class OrdersAmmountComponent {
  @Input() ammount!: number;
  @Input() id!: number;
  @Input() precio!: number;
  subtotal: number = 0;
  @Output() subtotalChange = new EventEmitter<{
    id: number;
    subtotal: number;
  }>();
  @Output() ammountChange = new EventEmitter<number>();

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.actualizarSubtotal();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ammount']) {
      this.actualizarSubtotal();
    }
  }

  actualizarCantidadProducto(nuevaCantidad: number) {
    console.log('Cantidad actualizada:', nuevaCantidad);
  }

  increment = () => {
    this.ammount += 1;
    this.actualizarSubtotal();
    this.ammountChange.emit(this.ammount);
  };

  decrement = () => {
    if (this.ammount > 0) {
      this.ammount -= 1;
      this.actualizarSubtotal();
      this.ammountChange.emit(this.ammount);
    }
  };

  remove = () => {
    this.ammount = 0;
    this.actualizarSubtotal();
  };

  actualizarSubtotal = () => {
    this.subtotal = this.ammount * this.precio;
    this.subtotalChange.emit({ id: this.id, subtotal: this.subtotal });
  };

  enviarCuerpoOrden = (productoCuerpoOrden: cuerpoOrden) => {
    const cuerpoOrden: cuerpoOrden = {
      idCuerpo: 0,
      idProducto: productoCuerpoOrden.idProducto,
      nombreProducto: productoCuerpoOrden.nombreProducto,
      cantidadProducto: productoCuerpoOrden.cantidadProducto,
      num_orden: productoCuerpoOrden.num_orden,
    };
    endWith;
    this.orderService.postCuerpoOrden(cuerpoOrden).subscribe({
      next: (response) => {
        console.log('Orden enviada exitosamente:', response);
      },
      error: (err) => {
        console.error('Error al enviar el cuerpo de la orden:', err);
      },
    });
  };
}
