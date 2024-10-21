import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'estadistica-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './estadistica-card.component.html',
  styleUrl: './estadistica-card.component.css',
})
export class EstadisticaCardComponent {
  @Input()
  title!: string;
}
