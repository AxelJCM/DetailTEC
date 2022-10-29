import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VistaCliente } from 'src/app/clientes-vista-cliente/clientes.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VistaClienteService {
  private url = "Clientes";

  constructor(private http : HttpClient) { }
  /**
   *
   * @returns Observable<VistaCliente[]>
   * @description Funcion que se encarga de obtener los datos de la tabla
   */
  public getVistaClientes() : Observable<VistaCliente[]> {
    return this.http.get<VistaCliente[]>(`${environment.apiUrl}/${this.url}`);
  }
  /**
   *
   * @param cliente VistaCliente
   * @returns Observable<VistaCliente[]>
   * @description Funcion que se encarga de editar los datos de la tabla
   */
  public actualizarVistaClientes(cliente: VistaCliente) : Observable<VistaCliente[]> {
    return this.http.put<VistaCliente[]>(`${environment.apiUrl}/${this.url}`,
    cliente);

  }
  /**
   *
   * @param cliente VistaCliente
   * @returns Observable<VistaCliente[]>
   * @description Funcion que se encarga de crear los datos de la tabla
   */
  public agregarVistaClientes(cliente: VistaCliente) : Observable<VistaCliente[]> {
    return this.http.post<VistaCliente[]>(`${environment.apiUrl}/${this.url}`,
    cliente);

  }
  /**
   *
   * @param cliente VistaCliente
   * @returns Observable<VistaCliente[]>
   * @description Funcion que se encarga de eliminar los datos de la tabla
   */
  public borrarVistaClientes(cliente: VistaCliente) : Observable<VistaCliente[]> {
    return this.http.delete<VistaCliente[]>(
      `${environment.apiUrl}/${this.url}/${cliente.ccedula}`);

  }
}
