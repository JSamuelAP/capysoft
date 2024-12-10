import { Component, OnInit } from '@angular/core';
import { ProductsListComponent } from '../../../products/components/products-list/products-list.component';
import { ProductsHeaderComponent } from '../../../products/components/products-header/products-header.component';
import { OrdersFormComponent } from '../../components/orders-form/orders-form.component';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'orders-page',
  standalone: true,
  imports: [
    ProductsListComponent,
    ProductsHeaderComponent,
    OrdersFormComponent,
  ],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css',
})
export class OrdersPageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isAdmin()) this.router.navigate(['products']);
  }
}
