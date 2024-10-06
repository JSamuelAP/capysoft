import { Component } from '@angular/core';

import { ProductsHeaderComponent } from '../../components/products-header/products-header.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [ProductsHeaderComponent, ProductsListComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {}
