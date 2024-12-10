import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any = null;
  private API_URL = 'http://192.168.0.101:8090/api/users/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, { username, password });
  }

  logout(): void {
    this.user = null;
  }

  setUser(user: any) {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  isAdmin(): boolean {
    return this.user.rol === 'admin';
  }
}
