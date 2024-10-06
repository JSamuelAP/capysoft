import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.products = [
      {
        nombre: 'Café Americano',
        precio: 20.75,
        categoria: 'bebida',
      },
      {
        nombre: 'Café Expresso',
        precio: 21.0,
        categoria: 'bebida',
      },
      {
        nombre: 'Pay de queso',
        precio: 18.25,
        categoria: 'postre',
      },
      {
        nombre: 'Sandwich de pollo',
        precio: 18.25,
        categoria: 'comida',
      },
    ];
  }
}
