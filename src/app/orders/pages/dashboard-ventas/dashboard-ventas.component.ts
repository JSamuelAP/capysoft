import { Component } from '@angular/core';

import { CalendarModule } from 'primeng/calendar';

import { EstadisticaGridComponent } from '../../components/estadistica-grid/estadistica-grid.component';

@Component({
  selector: 'dashboard-ventas',
  standalone: true,
  imports: [CalendarModule, EstadisticaGridComponent],
  templateUrl: './dashboard-ventas.component.html',
  styleUrl: './dashboard-ventas.component.css',
})
export class DashboardVentasComponent {}
