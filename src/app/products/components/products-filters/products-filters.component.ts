import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'products-filters',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './products-filters.component.html',
  styleUrl: './products-filters.component.css',
})
export class ProductsFiltersComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onClick(category?: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category },
      queryParamsHandling: 'merge',
    });
  }
}
