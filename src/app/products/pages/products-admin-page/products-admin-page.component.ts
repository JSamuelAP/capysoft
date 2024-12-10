import { Component, OnInit } from '@angular/core';

import { ProductsHeaderComponent } from '../../components/products-header/products-header.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { ProductsFormComponent } from '../../components/products-form/products-form.component';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

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
export class ProductsAdminPageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAdmin()) this.router.navigate(['products']);
  }
}
