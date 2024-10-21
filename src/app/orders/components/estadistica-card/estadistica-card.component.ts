import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

import { Product } from '../../model/product.interface';
import { Caja } from '../../model/caja.interface';

@Component({
  selector: 'estadistica-card',
  standalone: true,
  imports: [CardModule, CommonModule, DividerModule],
  templateUrl: './estadistica-card.component.html',
  styleUrl: './estadistica-card.component.css',
})
export class EstadisticaCardComponent {
  @Input()
  title!: string;

  @Input()
  icon: string = 'pi pi-dollar';

  @Input()
  moneyAmount?: number;

  @Input()
  product?: Product;

  @Input()
  products?: Product[];

  @Input()
  cajas?: Caja[];
}
