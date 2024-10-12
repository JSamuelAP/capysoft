import { Component } from '@angular/core';

import { ProductsHeaderComponent } from '../../components/products-header/products-header.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { ProductsFormComponent } from '../../components/products-form/products-form.component';

@Component({
  selector: 'products-admin-page',
  standalone: true,
  imports: [
    ProductsHeaderComponent,
    ProductsListComponent,
    ProductsFormComponent,
  ],
  templateUrl: './products-admin-page.component.html',
  styleUrl: './products-admin-page.component.css',
})
export class ProductsAdminPageComponent {}
