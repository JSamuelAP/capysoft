import { Product } from './product.interface';

export interface ProductWithPhoto extends Product {
  foto?: File;
}
