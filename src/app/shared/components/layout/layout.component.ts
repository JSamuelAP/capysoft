import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated())
      this.router.navigate(['/auth/login']);
  }
}
