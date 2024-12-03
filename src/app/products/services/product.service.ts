import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';

import { Product } from '../model/product.interface';
import { ProductWithPhoto } from '../model/productWithPhoto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productSource = new Subject<Product>();
  product$ = this.productSource.asObservable();
  private products = new BehaviorSubject<Product[]>([]);
  products$ = this.products.asObservable();
  private API_URL = 'http://localhost:8090/api/products/producto';

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http.get<Product[]>(this.API_URL).subscribe((data) => {
      this.products.next(data);
    });
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of([]);
  }

  getProductsBySearchTerm(searchTerm: string): Observable<Product[]> {
    return of([]);
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
    return of(product);
  }

  deleteProduct(product: ProductWithPhoto) {
    this.http.delete(`${this.API_URL}/${product.idProducto}`).subscribe(() => {
      const updatedProducts = this.products.value.filter(
        (p) => p.idProducto !== product.idProducto
      );
      this.products.next(updatedProducts);
    });
  }

  emitProudct(product: Product) {
    this.productSource.next(product);
  }

  getImgUrl(product: Product): string {
    if (product.imagenProducto)
      return `${this.API_URL}/upload/img/${product.imagenProducto}`;
    else return './assets/placeholder.jpeg';
  }
}
