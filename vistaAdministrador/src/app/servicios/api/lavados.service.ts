import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lavado } from 'src/app/lavado/lavado.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LavadosService {
  private url = "Lavados";

  constructor(private http : HttpClient) { }
  /**
   *
   * @returns Observable<Lavado[]>
   * @description Funcion que se encarga de obtener los datos de la tabla
   */
  public getLavados() : Observable<Lavado[]> {
    return this.http.get<Lavado[]>(`${environment.apiUrl}/${this.url}`);
  }
  /**
   *
   * @param lavado Lavado
   * @returns Observable<Lavado[]>
   * @description Funcion que se encarga de editar los datos de la tabla
   */
  public actualizarLavados(lavado: Lavado) : Observable<Lavado[]> {
    return this.http.put<Lavado[]>(`${environment.apiUrl}/${this.url}`,
    lavado);

  }
  /**
   *
   * @param lavado Lavado
   * @returns Observable<Lavado[]>
   * @description Funcion que se encarga de crear los datos de la tabla
   */
  public agregarLavados(lavado: Lavado) : Observable<Lavado[]> {
    return this.http.post<Lavado[]>(`${environment.apiUrl}/${this.url}`,
    lavado);

  }
  /**
   *
   * @param lavado Lavado
   * @returns Observable<Lavado[]>
   * @description Funcion que se encarga de eliminar los datos de la tabla
   */
  public borrarLavados(lavado: Lavado) : Observable<Lavado[]> {
    return this.http.delete<Lavado[]>(
      `${environment.apiUrl}/${this.url}/${lavado.ltipoLavado}`);
  }
}
