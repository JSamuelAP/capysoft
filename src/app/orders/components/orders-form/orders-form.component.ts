import { Component, OnDestroy, OnInit } from '@angular/core';

import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { PayOrdersComponent } from '../pay-orders/pay-orders.component';
import { OrdersAmmountComponent } from '../orders-ammount/orders-ammount.component';

import { ProductOrder } from '../../model/product.interface';
import { ProductService } from '../../../products/services/product.service';
import { OrderService } from '../../services/order.service';
import { Subject, takeUntil } from 'rxjs';

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
export class OrdersFormComponent implements OnInit, OnDestroy {
  products: ProductOrder[] = [];

  total: number = 0;
  subtotales: { [key: number]: number } = {};

  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.total = 0;
    this.products = this.orderService.getProductos();
    this.productService.product$
      .pipe(takeUntil(this.destroy$))
      .subscribe((product) => {
        if (product) {
          this.orderService.agregarProducto({
            ...product,
            cantidadProducto: 1,
          });
        }
      });

    this.products.forEach((product) => {
      const subtotal = product.precioProducto * product.cantidadProducto;
      this.subtotales[product.idProducto] = subtotal;
    });
    this.calcularTotal();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  actualizarTotal({ id, subtotal }: { id: number; subtotal: number }) {
    if (subtotal === 0) this.orderService.quitarProducto(id);
    this.subtotales[id] = subtotal;
    this.calcularTotal();
    this.products = this.orderService.getProductos();
  }

  calcularTotal = () => {
    setTimeout(() => {
      this.total = Object.values(this.subtotales).reduce(
        (acc, curr) => acc + curr,
        0
      );
    }, 0);
  };

  handleLimpiarProductos = () => {
    this.orderService.vaciarProductos();
    this.products = this.orderService.getProductos();
    this.subtotales = {};
    this.calcularTotal();
  };
}
