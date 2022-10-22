import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajadorr } from 'src/app/modelos/trabajadores';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  private url = "Trabajador";

  constructor(private http : HttpClient) { }

  public getTrabajadores() : Observable<Trabajadorr[]> {
    return this.http.get<Trabajadorr[]>(`${environment.apiUrl}/${this.url}`);
    
  }

  public actualizarTrabajadores(trabajador: Trabajadorr) : Observable<Trabajadorr[]> {
    return this.http.put<Trabajadorr[]>(`${environment.apiUrl}/${this.url}`,
    trabajador);
    
  }

  public agregarTrabajadores(trabajador: Trabajadorr) : Observable<Trabajadorr[]> {
    return this.http.post<Trabajadorr[]>(`${environment.apiUrl}/${this.url}`,
    trabajador);
    
  }

  public borrarTrabajadores(trabajador: Trabajadorr) : Observable<Trabajadorr[]> {
    return this.http.delete<Trabajadorr[]>(
      `${environment.apiUrl}/${this.url}/${trabajador.cedula}`);
    
  }
}