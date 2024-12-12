import { Component } from '@angular/core';

import { EstadisticaCardComponent } from '../estadistica-card/estadistica-card.component';
import { ProductOrder } from '../../model/product.interface';
import { Caja } from '../../model/caja.interface';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'estadistica-grid',
  standalone: true,
  imports: [EstadisticaCardComponent],
  templateUrl: './estadistica-grid.component.html',
  styleUrl: './estadistica-grid.component.css',
})
export class EstadisticaGridComponent {
  productos: ProductOrder[] = [];
  masVendido!: ProductOrder;
  total: number = 0;
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getProductosMasVendidos().subscribe({
      next: (productos) => {
        this.productos = productos;
      },
      error: (err) => {
        console.error('Error al obtener los productos más vendidos:', err);
      },
    });

    this.orderService.getProductoMasVendido().subscribe({
      next: (product: ProductOrder) => {
        this.masVendido = product;
        console.log('Producto más vendido:', this.masVendido);
      },
      error: (err) => {
        console.error('Error al obtener el producto más vendido:', err);
      },
    });
    this.orderService.getTotalVentas().subscribe({
      next: (total) => {
        this.total = total;
      },
      error: (err) => {
        console.error('Error al obtener el total de ventas:', err);
      },
    });
  }

  cajas: Caja[] = [
    { nombre: 'Caja 003', dinero: 1500 },
    { nombre: 'Caja 002', dinero: 500 },
    { nombre: 'Caja 001', dinero: 300 },
    { nombre: 'Caja 004', dinero: 200 },
  ];
}
