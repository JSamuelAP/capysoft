import { Component } from '@angular/core';

import { ProductSearchBarComponent } from '../product-search-bar/product-search-bar.component';
import { ProductsFiltersComponent } from '../products-filters/products-filters.component';

@Component({
  selector: 'products-header',
  standalone: true,
  imports: [ProductSearchBarComponent, ProductsFiltersComponent],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css',
})
export class ProductsHeaderComponent {}
