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
    nombre: 'Capuccino',
    cantidad: 12,
  };
  cajas: Caja[] = [
    { nombre: 'Caja 003', dinero: 1500 },
    { nombre: 'Caja 002', dinero: 500 },
    { nombre: 'Caja 001', dinero: 300 },
    { nombre: 'Caja 004', dinero: 200 },
  ];
  productos: Product[] = [
    { nombre: 'Café Americano', cantidad: 10 },
    { nombre: 'Latte', cantidad: 7 },
    { nombre: 'Sandwich de pollo', cantidad: 2 },
    { nombre: 'Pay de queso', cantidad: 1 },
  ];
}
