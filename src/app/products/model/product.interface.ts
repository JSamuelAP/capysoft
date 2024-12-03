export interface Product {
  idProducto: number;
  nombreProducto: string;
  precioProducto: number;
  categoriaProducto: 'bebida' | 'postre' | 'comida';
  imagenProducto: string;
}
