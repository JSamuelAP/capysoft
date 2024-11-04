import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Caja } from '../model/caja.interface';

@Injectable({
  providedIn: 'root',
})
export class CashService {
  cajas: Caja[] = [
    {
      numero: '001',
      estado: true,
    },
    {
      numero: '002',
      estado: false,
    },
    {
      numero: '003',
      estado: true,
    },
    {
      numero: '004',
      estado: true,
    },
  ];
  private cashSource = new Subject<Caja>();
  cash$ = this.cashSource.asObservable();

  constructor(private http: HttpClient) {}

  getCajas(): Observable<Caja[]> {
    return of(this.cajas);
  }

  crearCaja(caja: Caja): Observable<Caja> {
    return of(caja);
  }

  editarCaja(caja: Caja): Observable<Caja> {
    return of(caja);
  }

  emitCash(cash: Caja) {
    this.cashSource.next(cash);
  }
}
