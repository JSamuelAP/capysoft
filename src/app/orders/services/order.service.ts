import { Injectable } from '@angular/core';
import { ProductOrder } from '../model/product.interface';
import { HttpClient } from '@angular/common/http';
import { cabeceraOrden } from '../model/cabeceraOrden.interface';
import { Observable } from 'rxjs';
import { cuerpoOrden } from '../model/cuerpoOrden.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  products: ProductOrder[] = [];
  apiUrl_CuerpoOrden = 'http://localhost:8090/api/orders/orden';

  constructor(private http: HttpClient) {}

  getProductos() {
    return this.products;
  }

  agregarProducto = (product: ProductOrder) => {
    const index = this.products.findIndex(
      (p) => p.idProducto === product.idProducto
    );

    if (index >= 0) {
      this.products[index].cantidadProducto++;
    } else {
      this.products.push(product);
    }
  };

  quitarProducto = (id: number) => {
    this.products = this.products.filter(
      (product) => product.idProducto !== id
    );
  };

  postCabeceraOrden = (cabeceraOrden : cabeceraOrden) => {
    return this.http.post<cabeceraOrden>(this.apiUrl_CuerpoOrden, cabeceraOrden);
  }

  postCuerpoOrden(cuerpoOrden: cuerpoOrden) {
    return this.http.post<cuerpoOrden>(`${this.apiUrl_CuerpoOrden}/${cuerpoOrden.num_orden}/cuerpos`, cuerpoOrden);
  }

  getProductosMasVendidos(){
    return this.http.get<ProductOrder[]>(`${this.apiUrl_CuerpoOrden}/top-5-productos`)
  }

  getProductoMasVendido(){
    return this.http.get<ProductOrder[]>(`${this.apiUrl_CuerpoOrden}/producto-mas-vendido`);
  }

  getTotalVentas(){
    return this.http.get<number>(`${this.apiUrl_CuerpoOrden}/total-ventas`);
  }

}
