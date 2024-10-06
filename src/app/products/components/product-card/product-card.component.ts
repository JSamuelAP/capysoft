import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';
import { Product } from '../../model/product.interface';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input()
  product!: Product;
}
