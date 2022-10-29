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
  /**
   *
   * @returns Observable<Trabajador[]>
   * @description Funcion que se encarga de obtener los datos de la tabla
   */
  public getTrabajadores() : Observable<Trabajador[]> {
    return this.http.get<Trabajador[]>(`${environment.apiUrl}/${this.url}`);
  }
  /**
   *
   * @param trabajador Trabajador
   * @returns Observable<Trabajador[]>
   * @description Funcion que se encarga de editar los datos de la tabla
   */
  public actualizarTrabajadores(trabajador: Trabajador) : Observable<Trabajador[]> {
    return this.http.put<Trabajador[]>(`${environment.apiUrl}/${this.url}`,
    trabajador);

  }
  /**
   *
   * @param trabajador Trabajador
   * @returns Observable<Trabajador[]>
   * @description Funcion que se encarga de crear los datos de la tabla
   */
  public agregarTrabajadores(trabajador: Trabajador) : Observable<Trabajador[]> {
    return this.http.post<Trabajador[]>(`${environment.apiUrl}/${this.url}`,
    trabajador);

  }
  /**
   *
   * @param trabajador Trabajador
   * @returns Observable<Trabajador[]>
   * @description Funcion que se encarga de eliminar los datos de la tabla
   */
  public borrarTrabajadores(trabajador: Trabajador) : Observable<Trabajador[]> {
    return this.http.delete<Trabajador[]>(
      `${environment.apiUrl}/${this.url}/${trabajador.tcedula}`);

  }
}
