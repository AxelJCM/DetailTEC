import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajador } from 'src/app/trabajadores/trabajador.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  private url = "Trabajadores";

  constructor(private http : HttpClient) { }

  public getTrabajadores() : Observable<Trabajador[]> {
    return this.http.get<Trabajador[]>(`${environment.apiUrl}/${this.url}`);
  }

  public actualizarTrabajadores(trabajador: Trabajador) : Observable<Trabajador[]> {
    return this.http.put<Trabajador[]>(`${environment.apiUrl}/${this.url}`,
    trabajador);

  }

  public agregarTrabajadores(trabajador: Trabajador) : Observable<Trabajador[]> {
    return this.http.post<Trabajador[]>(`${environment.apiUrl}/${this.url}`,
    trabajador);

  }

  public borrarTrabajadores(trabajador: Trabajador) : Observable<Trabajador[]> {
    return this.http.delete<Trabajador[]>(
      `${environment.apiUrl}/${this.url}/${trabajador.tcedula}`);

  }
}
