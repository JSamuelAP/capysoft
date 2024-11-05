import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { PayOrdersComponent } from '../pay-orders/pay-orders.component';
import { OrdersAmmountComponent } from '../orders-ammount/orders-ammount.component';
import { Product } from '../../model/product.interface';

@Component({
  selector: 'orders-form',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    PayOrdersComponent,
    OrdersAmmountComponent,
  ],
  templateUrl: './orders-form.component.html',
  styleUrl: './orders-form.component.css',
})
export class OrdersFormComponent {
  
  products: Product[] = [
    {
      id: 1,
      nombre: 'Cafe Americano',
      precio: 5.0,
      cantidad: 1,
    },
    {
      id: 2,
      nombre: 'Sandwich de Pollo',
      precio: 8.0,
      cantidad: 1,
    },
    {
      id: 3,
      nombre: 'Pay de Queso',
      precio: 7.5,
      cantidad: 1,
    },
  ];

  total: number = 0;
  subtotales: { [key: number]: number } = {};

  ngOnInit() {
    this.products.forEach(product => {
      const subtotal = product.precio * product.cantidad;
      this.subtotales[product.id] = subtotal;
    });
    this.calcularTotal();
  }

  actualizarTotal({id, subtotal}: {id: number, subtotal: number}) {
    this.subtotales[id] = subtotal;
    this.calcularTotal();
  };

  calcularTotal = () => {this.total = Object.values(this.subtotales).reduce((acc, curr) => acc + curr, 0)};

  handleLimpiarProductos = () => { 
    this.products = [];
    this.total = 0;
  }
}
