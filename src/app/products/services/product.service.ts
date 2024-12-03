import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';

import { Product } from '../model/product.interface';
import { ProductWithPhoto } from '../model/productWithPhoto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  private productSource = new Subject<Product>();
  product$ = this.productSource.asObservable();
  private API_URL = 'http://192.168.0.101:8090/api/products/producto';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
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
    return this.http.post<Product>(this.API_URL, product).pipe(
      map((response) => {
        if (product.foto) {
          this.uploadPhoto(product.foto, response.idProducto).subscribe(
            (data) => {
              response = data['producto'];
              return response;
            }
          );
        }
        return response;
      })
    );
  }

  uploadPhoto(archivo: File, id: number): Observable<any> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('id', id.toString());
    return this.http.post(`${this.API_URL}/upload`, formData);
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

  getImgUrl(product: Product): string {
    return `${this.API_URL}/upload/img/${product.imagenProducto}`;
  }
}
