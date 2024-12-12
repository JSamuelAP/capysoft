import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Productos',
        route: '/products',
      },
      {
        label: 'Admin',
        route: '/products/admin',
      },
      {
        label: 'Cajas',
        route: '/auth/register',
      },
      {
        label: 'Ordenar',
        route: '/orders',
      },
      {
        label: 'Ventas',
        route: '/orders/dashboard',
      },
      {
        label: 'Salir',
        icon: 'pi pi-sign-out',
        route: '/signout',
      },
    ];
  }
}
