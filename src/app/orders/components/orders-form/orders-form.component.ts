import { Component, OnInit } from '@angular/core';

import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { PayOrdersComponent } from '../pay-orders/pay-orders.component';
import { OrdersAmmountComponent } from '../orders-ammount/orders-ammount.component';

import { ProductOrder } from '../../model/product.interface';
import { ProductService } from '../../../products/services/product.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'orders-form',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    PayOrdersComponent,
    OrdersAmmountComponent,
  ],
  templateUrl: './orders-form.component.html',
  styleUrl: './orders-form.component.css',
})
export class OrdersFormComponent implements OnInit {
  products: ProductOrder[] = [];

  total: number = 0;
  subtotales: { [key: number]: number } = {};

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.products = this.orderService.getProductos();
    this.productService.product$.subscribe((product) => {
      if (product) {
        this.orderService.agregarProducto({ ...product, cantidadProducto: 1 });
      }
    });

    this.products.forEach((product) => {
      const subtotal = product.precioProducto * product.cantidadProducto;
      this.subtotales[product.idProducto] = subtotal;
    });
    this.calcularTotal();
  }

  actualizarTotal({ id, subtotal }: { id: number; subtotal: number }) {
    if (subtotal === 0) this.orderService.quitarProducto(id);
    this.subtotales[id] = subtotal;
    this.calcularTotal();
    this.products = this.orderService.getProductos();
  }

  calcularTotal = () => {
    this.total = Object.values(this.subtotales).reduce(
      (acc, curr) => acc + curr,
      0
    );
  };

  handleLimpiarProductos = () => {
    this.products = [];
    this.total = 0;
  };
}
