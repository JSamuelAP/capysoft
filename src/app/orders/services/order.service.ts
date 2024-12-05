import { Injectable } from '@angular/core';
import { ProductOrder } from '../model/product.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  products: ProductOrder[] = [];

  constructor() {}

  getProductos() {
    return this.products;
  }

  agregarProducto = (product: ProductOrder) => {
    const index = this.products.findIndex(
      (p) => p.idProducto === product.idProducto
    );

    if (index >= 0) {
      // Ya está en la lista, incrementar cantidad
      this.products[index].cantidadProducto++;
    } else {
      // No existe el producto, se agrega
      this.products.push(product);
    }
  };

  quitarProducto = (id: number) => {
    this.products = this.products.filter(
      (product) => product.idProducto !== id
    );
  };
}
