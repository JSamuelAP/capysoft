import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'products-filters',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './products-filters.component.html',
  styleUrl: './products-filters.component.css',
})
export class ProductsFiltersComponent {}
