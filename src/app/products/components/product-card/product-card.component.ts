import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { Product } from '../../model/product.interface';
import { DeleteProductButtonComponent } from '../delete-product-button/delete-product-button.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    DeleteProductButtonComponent,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input()
  product!: Product;

  @Input()
  pickable: boolean = false;

  @Input()
  editable: boolean = false;

  constructor(public productService: ProductService) {}

  onButtonSelectClick() {
    this.emitProduct();
  }

  onButtonEditClick() {
    this.emitProduct();
  }

  emitProduct() {
    this.productService.emitProudct(this.product);
  }
}
