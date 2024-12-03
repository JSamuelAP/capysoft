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
      idProducto: 1,
      nombreProducto: 'Café Americano',
      precioProducto: 20.75,
      categoriaProducto: 'bebida',
      imagenProducto: '',
    },
    {
      idProducto: 2,
      nombreProducto: 'Café Expresso',
      precioProducto: 21.0,
      categoriaProducto: 'bebida',
      imagenProducto: '',
    },
    {
      idProducto: 3,
      nombreProducto: 'Pay de queso',
      precioProducto: 18.25,
      categoriaProducto: 'postre',
      imagenProducto: '',
    },
    {
      idProducto: 4,
      nombreProducto: 'Sandwich de pollo',
      precioProducto: 18.25,
      categoriaProducto: 'comida',
      imagenProducto: '',
    },
    {
      idProducto: 5,
      nombreProducto: 'Café Americano',
      precioProducto: 20.75,
      categoriaProducto: 'bebida',
      imagenProducto: '',
    },
    {
      idProducto: 6,
      nombreProducto: 'Café Expresso',
      precioProducto: 21.0,
      categoriaProducto: 'bebida',
      imagenProducto: '',
    },
    {
      idProducto: 7,
      nombreProducto: 'Pay de queso',
      precioProducto: 18.25,
      categoriaProducto: 'postre',
      imagenProducto: '',
    },
    {
      idProducto: 8,
      nombreProducto: 'Sandwich de pollo',
      precioProducto: 18.25,
      categoriaProducto: 'comida',
      imagenProducto: '',
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
      this.products.filter((product) => product.categoriaProducto === category)
    );
  }

  getProductsBySearchTerm(searchTerm: string): Observable<Product[]> {
    return of(
      this.products.filter((product) =>
        product.nombreProducto.includes(searchTerm)
      )
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
      if (p.idProducto === product.idProducto) p = product;
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
