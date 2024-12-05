import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'products-search-bar',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputTextModule],
  templateUrl: './product-search-bar.component.html',
  styleUrl: './product-search-bar.component.css',
})
export class ProductSearchBarComponent {
  searchTerm: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}
  search() {
    const queryParams = this.searchTerm.trim() ? { q: this.searchTerm } : {};
    console.log(queryParams);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }
}
