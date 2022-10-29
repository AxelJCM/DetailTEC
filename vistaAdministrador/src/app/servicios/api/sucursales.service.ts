import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from 'src/app/sucursales/sucursal.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  private url = "Sucursals";

  constructor(private http : HttpClient) { }
  /**
   *
   * @returns Observable<Sucursal[]>
   * @description Funcion que se encarga de obtener los datos de la tabla
   */
  public getSucursales() : Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(`${environment.apiUrl}/${this.url}`);
  }
  /**
   *
   * @param sucursal
   * @returns Observable<Sucursal[]>
   * @description Funcion que se encarga de editar los datos de la tabla
   */
  public actualizarSucursales(sucursal: Sucursal) : Observable<Sucursal[]> {
    return this.http.put<Sucursal[]>(`${environment.apiUrl}/${this.url}`,
    sucursal);

  }
 /**
  *
  * @param sucursal Sucursal
  * @returns Observable<Sucursal[]>
  * @description Funcion que se encarga de crear los datos de la tabla
  */
  public agregarSucursales(sucursal: Sucursal) : Observable<Sucursal[]> {
    return this.http.post<Sucursal[]>(`${environment.apiUrl}/${this.url}`,
    sucursal);

  }
  /**
   *
   * @param sucursal Sucursal
   * @returns Observable<Sucursal[]>
   * @description Funcion que se encarga de eliminar los datos de la tabla
   */
  public borrarSucursales(sucursal: Sucursal) : Observable<Sucursal[]> {
    return this.http.delete<Sucursal[]>(
      `${environment.apiUrl}/${this.url}/${sucursal.snombre}`);
  }
}
