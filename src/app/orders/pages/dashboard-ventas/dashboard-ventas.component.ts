import { Component, OnInit } from '@angular/core';

import { CalendarModule } from 'primeng/calendar';

import { EstadisticaGridComponent } from '../../components/estadistica-grid/estadistica-grid.component';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-ventas',
  standalone: true,
  imports: [CalendarModule, EstadisticaGridComponent],
  templateUrl: './dashboard-ventas.component.html',
  styleUrl: './dashboard-ventas.component.css',
})
export class DashboardVentasComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAdmin()) this.router.navigate(['products']);
  }
}
