import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'products-search-bar',
  standalone: true,
  imports: [ButtonModule, InputTextModule],
  templateUrl: './product-search-bar.component.html',
  styleUrl: './product-search-bar.component.css',
})
export class ProductSearchBarComponent {}
