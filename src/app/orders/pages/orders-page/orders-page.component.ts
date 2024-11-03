import { Component } from '@angular/core';
import { ProductsListComponent } from '../../../products/components/products-list/products-list.component';
import { ProductsHeaderComponent } from '../../../products/components/products-header/products-header.component';
import { OrdersFormComponent } from '../../components/orders-form/orders-form.component';

@Component({
  selector: 'orders-page',
  standalone: true,
  imports: [
    ProductsListComponent,
    ProductsHeaderComponent,
    OrdersFormComponent,
  ],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css'
})
export class OrdersPageComponent {
}
