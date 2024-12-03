import { Product } from '../../products/model/product.interface';

export interface ProductOrder extends Product {
  cantidadProducto: number;
}
