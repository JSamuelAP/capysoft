import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any = null;
  constructor(private http: HttpClient) {}

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.user = { username };
      return true;
    }
    return false;
  }

  logout(): void {
    this.user = null;
  }

  getUser(): any {
    return this.user;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }
}
