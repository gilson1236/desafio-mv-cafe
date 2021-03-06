import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Colaborador } from '../models/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private url = 'http://localhost:8080/api/v1/colaborador';

  constructor(private http: HttpClient) { }

  getColaboradorDetalhado(id: number): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${this.url}/${id}`);
  }

  getColaboradorList(): Observable<Colaborador[]>{
    return this.http.get<Colaborador[]>(`${this.url}`);
  }

  salvarColaborador(colaborador: Colaborador): Observable<Colaborador>{
    return this.http.post<Colaborador>(`${this.url}`, colaborador);
  }

  deletarColaborador(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
