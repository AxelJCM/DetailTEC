import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/proveedores/proveedores.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private url = "Proveedors";

  constructor(private http : HttpClient) { }
  /**
   *
   * @returns Observable<Proveedor[]>
   * @description Funcion que se encarga de obtener los datos de la tabla
   */
  public getProveedores() : Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${environment.apiUrl}/${this.url}`);
  }
  /**
   *
   * @param proveedor Proveedor
   * @returns Observable<Proveedor[]>
   * @description Funcion que se encarga de editar los datos de la tabla
   */
  public actualizarProveedores(proveedor: Proveedor) : Observable<Proveedor[]> {
    return this.http.put<Proveedor[]>(`${environment.apiUrl}/${this.url}`,
    proveedor);

  }
  /**
   *
   * @param proveedor Proveedor
   * @returns Observable<Proveedor[]>
   */
  public agregarProveedores(proveedor: Proveedor) : Observable<Proveedor[]> {
    return this.http.post<Proveedor[]>(`${environment.apiUrl}/${this.url}`,
    proveedor);

  }
  /**
   *
   * @param proveedor Proveedor
   * @returns Observable<Proveedor[]>
   * @description Funcion que se encarga de eliminar los datos de la tabla
   */
  public borrarProveedores(proveedor: Proveedor) : Observable<Proveedor[]> {
    return this.http.delete<Proveedor[]>(
      `${environment.apiUrl}/${this.url}/${proveedor.pcedulaJuridica}`);
  }
}
