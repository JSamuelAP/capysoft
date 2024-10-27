import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../model/product.interface';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  products: Product[] | undefined;

  @Input()
  fullWidth: boolean = true;

  @Input()
  isAdminList: boolean = false;

  @Input()
  isOrderList: boolean = false;

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        nombre: 'Café Americano',
        precio: 20.75,
        categoria: 'bebida',
      },
      {
        id: 2,
        nombre: 'Café Expresso',
        precio: 21.0,
        categoria: 'bebida',
      },
      {
        id: 3,
        nombre: 'Pay de queso',
        precio: 18.25,
        categoria: 'postre',
      },
      {
        id: 4,
        nombre: 'Sandwich de pollo',
        precio: 18.25,
        categoria: 'comida',
      },
      {
        id: 5,
        nombre: 'Café Americano',
        precio: 20.75,
        categoria: 'bebida',
      },
      {
        id: 6,
        nombre: 'Café Expresso',
        precio: 21.0,
        categoria: 'bebida',
      },
      {
        id: 7,
        nombre: 'Pay de queso',
        precio: 18.25,
        categoria: 'postre',
      },
      {
        id: 8,
        nombre: 'Sandwich de pollo',
        precio: 18.25,
        categoria: 'comida',
      },
    ];
  }
}
