import { Injectable } from '@angular/core';
import { Product } from '../model/product.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  products: Product[] = [];

  constructor() {}

  getProductos() {
    return this.products;
  }

  agregarProducto = (product: Product) => {
    const index = this.products.findIndex((p) => p.id === product.id);

    if (index >= 0) {
      // Ya está en la lista, incrementar cantidad
      this.products[index].cantidad++;
    } else {
      // No existe el producto, se agrega
      this.products.push(product);
    }
  };

  quitarProducto = (id: number) => {
    this.products = this.products.filter((product) => product.id !== id);
  };
}
