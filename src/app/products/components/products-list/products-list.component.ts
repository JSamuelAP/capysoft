import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../model/product.interface';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  @Input()
  fullWidth: boolean = true;

  @Input()
  isAdminList: boolean = false;

  @Input()
  isOrderList: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const category: string = params['category'];
      const searchTerm: string = params['q'];

      if (category) {
        this.productService
          .getProductsByCategory(category)
          .subscribe((data) => (this.products = data));
      } else if (searchTerm) {
        this.productService
          .getProductsBySearchTerm(searchTerm)
          .subscribe((data) => (this.products = data));
      } else {
        this.productService
          .getProducts()
          .subscribe((data) => (this.products = data));
      }
    });
  }
}
