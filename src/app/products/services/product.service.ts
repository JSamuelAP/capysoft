import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Product } from '../model/product.interface';
import { ProductWithPhoto } from '../model/productWithPhoto';

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

  private productSource = new Subject<Product>();
  product$ = this.productSource.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(
      this.products.filter((product) => product.categoria === category)
    );
  }

  getProductsBySearchTerm(searchTerm: string): Observable<Product[]> {
    return of(
      this.products.filter((product) => product.nombre.includes(searchTerm))
    );
  }

  createProduct(product: ProductWithPhoto): Observable<Product> {
    this.products.push(product);
    if (product.foto)
      this.uploadPhoto(product.foto, 1).subscribe((data) => console.log(data));
    return of(product);
  }

  uploadPhoto(archivo: File, id: number): Observable<Object> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('id', id.toString());
    return of({ archivo, id });
  }

  editProduct(product: ProductWithPhoto): Observable<Product> {
    this.products = this.products.map((p) => {
      if (p.id === product.id) p = product;
      return p;
    });
    if (product.foto)
      this.uploadPhoto(product.foto, 1).subscribe((data) => console.log(data));
    return of(product);
  }

  emitProudct(product: Product) {
    this.productSource.next(product);
  }
}
