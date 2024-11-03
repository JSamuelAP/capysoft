import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../model/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
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

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(
      this.products.filter((product) => product.categoria === category)
    );
  }
}
