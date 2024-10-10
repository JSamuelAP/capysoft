export interface Product {
  id: number;
  nombre: string;
  precio: number;
  categoria: 'bebida' | 'postre' | 'comida';
}
