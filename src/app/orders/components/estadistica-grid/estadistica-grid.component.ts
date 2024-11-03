import { Component } from '@angular/core';

import { EstadisticaCardComponent } from '../estadistica-card/estadistica-card.component';
import { Product } from '../../model/product.interface';
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
  masVendido: Product = {
    id: 1,
    nombre: 'Capuccino',
    cantidad: 12,
    precio: 4,
  };
  cajas: Caja[] = [
    { nombre: 'Caja 003', dinero: 1500 },
    { nombre: 'Caja 002', dinero: 500 },
    { nombre: 'Caja 001', dinero: 300 },
    { nombre: 'Caja 004', dinero: 200 },
  ];
  productos: Product[] = [
    { id: 1, nombre: 'Café Americano', cantidad: 10, precio:5 },
    { id: 2, nombre: 'Latte', cantidad: 7, precio:10},
    { id: 3, nombre: 'Sandwich de pollo', cantidad: 2, precio:9},
    { id: 4, nombre: 'Pay de queso', cantidad: 1 , precio:7},
  ];
}
