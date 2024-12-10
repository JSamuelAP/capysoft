import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';

import { Caja } from '../model/caja.interface';

@Injectable({
  providedIn: 'root',
})
export class CashService {
  private cashSource = new Subject<Caja>();
  cash$ = this.cashSource.asObservable();
  private cajas = new BehaviorSubject<Caja[]>([]);
  cajas$ = this.cajas.asObservable();
  private API_URL = 'http://192.168.0.101:8090/api/users/users';

  constructor(private http: HttpClient) {}

  getCajas() {
    this.http.get<any[]>(this.API_URL).subscribe((data) => {
      const usuariosCaja = data
        .filter((user) => {
          return user.rol === 'caja';
        })
        .map((user) => {
          const usuarioCaja: Caja = {
            id: user.id,
            numero: user.username,
            estado: true,
          };
          return usuarioCaja;
        });
      this.cajas.next(usuariosCaja);
    });
  }

  crearCaja(caja: any): Observable<Caja> {
    return this.http
      .post<Caja>(this.API_URL, {
        username: caja.numero,
        password: caja.password,
        rol: 'caja',
      })
      .pipe(
        tap((newCaja: any) => {
          const nuevaCaja: Caja = {
            id: newCaja.id,
            numero: newCaja.username,
            estado: true,
          };
          this.cajas.value.push(nuevaCaja);
          this.cajas.next(this.cajas.value);
        })
      );
  }

  editarCaja(caja: any): Observable<Caja> {
    console.log(caja);
    const newCaja = caja.password
      ? { username: caja.numero, password: caja.password, rol: 'caja' }
      : { username: caja.numero, rol: 'caja' };
    return this.http.put<Caja>(`${this.API_URL}/${caja.id}`, newCaja).pipe(
      tap((newCaja: any) => {
        const nuevaCaja: Caja = {
          id: newCaja.id,
          numero: newCaja.username,
          estado: true,
        };
        const updatedCajas = this.cajas.value.map((c) => {
          if (c.id === newCaja.id) c = nuevaCaja;
          return c;
        });
        this.cajas.next(updatedCajas);
      })
    );
  }

  eliminarCaja(caja: Caja) {
    this.http.delete(`${this.API_URL}/${caja.id}`).subscribe(() => {
      const updatedCash = this.cajas.value.filter((c) => c.id !== caja.id);
      this.cajas.next(updatedCash);
    });
  }

  emitCash(cash: Caja) {
    this.cashSource.next(cash);
  }
}
