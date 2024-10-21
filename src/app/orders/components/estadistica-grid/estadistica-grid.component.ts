import { Component } from '@angular/core';

import { EstadisticaCardComponent } from '../estadistica-card/estadistica-card.component';

@Component({
  selector: 'estadistica-grid',
  standalone: true,
  imports: [EstadisticaCardComponent],
  templateUrl: './estadistica-grid.component.html',
  styleUrl: './estadistica-grid.component.css',
})
export class EstadisticaGridComponent {}
