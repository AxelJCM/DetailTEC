import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insumos } from 'src/app/insumo/insumos.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = "Productos";

  constructor(private http : HttpClient) { }
  /**
   *
   * @returns Observable<Insumos[]>
   * @description Funcion que se encarga de obtener los datos de la tabla
   */
  public getInsumos() : Observable<Insumos[]> {
    return this.http.get<Insumos[]>(`${environment.apiUrl}/${this.url}`);
  }
  /**
   *
   * @param insumo Insumos
   * @returns Observable<Insumos[]>
   * @description Funcion que se encarga de editar los datos de la tabla
   */
  public actualizarProductos(insumo: Insumos) : Observable<Insumos[]> {
    return this.http.put<Insumos[]>(`${environment.apiUrl}/${this.url}`,
    insumo);

  }
  /**
   *
   * @param insumo Insumos
   * @returns Observable<Insumos[]>
   * @description Funcion que se encarga de crear los datos de la tabla
   */
  public agregarProductos(insumo: Insumos) : Observable<Insumos[]> {
    return this.http.post<Insumos[]>(`${environment.apiUrl}/${this.url}`,
    insumo);

  }
  /**
   *
   * @param insumo Insumos
   * @returns Observable<Insumos[]>
   * @description Funcion que se encarga de eliminar los datos de la tabla
   */
  public borrarProductos(insumo: Insumos) : Observable<Insumos[]> {
    return this.http.delete<Insumos[]>(
      `${environment.apiUrl}/${this.url}/${insumo.pmarca}`);

  }
}
