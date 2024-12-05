import { Component } from '@angular/core';

import { EstadisticaCardComponent } from '../estadistica-card/estadistica-card.component';
import { ProductOrder } from '../../model/product.interface';
import { Caja } from '../../model/caja.interface';

@Component({
  selector: 'estadistica-grid',
  standalone: true,
  imports: [EstadisticaCardComponent],
  templateUrl: './estadistica-grid.component.html',
  styleUrl: './estadistica-grid.component.css',
})
export class EstadisticaGridComponent {
  total: number = 2500;
  masVendido: ProductOrder = {
    idProducto: 1,
    nombreProducto: 'Capuccino',
    cantidadProducto: 12,
    categoriaProducto: 'bebida',
    precioProducto: 4,
    imagenProducto: '',
  };
  cajas: Caja[] = [
    { nombre: 'Caja 003', dinero: 1500 },
    { nombre: 'Caja 002', dinero: 500 },
    { nombre: 'Caja 001', dinero: 300 },
    { nombre: 'Caja 004', dinero: 200 },
  ];
  productos: ProductOrder[] = [
    {
      idProducto: 1,
      nombreProducto: 'Café Americano',
      cantidadProducto: 10,
      precioProducto: 5,
      categoriaProducto: 'bebida',
      imagenProducto: '',
    },
    {
      idProducto: 2,
      nombreProducto: 'Latte',
      cantidadProducto: 7,
      precioProducto: 10,
      categoriaProducto: 'bebida',
      imagenProducto: '',
    },
    {
      idProducto: 3,
      nombreProducto: 'Sandwich de pollo',
      cantidadProducto: 2,
      precioProducto: 9,
      categoriaProducto: 'comida',
      imagenProducto: '',
    },
    {
      idProducto: 4,
      nombreProducto: 'Pay de queso',
      cantidadProducto: 1,
      precioProducto: 7,
      categoriaProducto: 'postre',
      imagenProducto: '',
    },
  ];
}
