import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citas } from 'src/app/citas/cita.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private url = "Citas";

  constructor(private http : HttpClient) { }
  /**
   *
   * @returns Observable<Citas[]>
   * @description Funcion que se encarga de obtener los datos de la tabla
   */
  public getCitas() : Observable<Citas[]> {
    return this.http.get<Citas[]>(`${environment.apiUrl}/${this.url}`);
  }
  /**
   *
   * @param citas Citas
   * @returns Observable<Citas[]>
   * @description Funcion que se encarga de editar los datos de la tabla
   */
  public actualizarCitas(citas: Citas) : Observable<Citas[]> {
    return this.http.put<Citas[]>(`${environment.apiUrl}/${this.url}`,
    citas);

  }
  /**
   *
   * @param citas Citas
   * @returns Observable<Citas[]>
   * @description Funcion que se encarga de crear los datos de la tabla
   */
  public agregarCitas(citas: Citas) : Observable<Citas[]> {
    return this.http.post<Citas[]>(`${environment.apiUrl}/${this.url}`,
    citas);

  }
  /**
   *
   * @param citas Citas
   * @returns Observable<Citas[]>
   * @description Funcion que se encarga de eliminar los datos de la tabla
   */
  public borrarCitas(citas: Citas) : Observable<Citas[]> {
    return this.http.delete<Citas[]>(
      `${environment.apiUrl}/${this.url}/${citas.cplaca}`);

  }
}
