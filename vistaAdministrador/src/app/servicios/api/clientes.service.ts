import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/registro/registro.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private url = "Clientes";

  constructor(private http : HttpClient) { }
  /**
   *
   * @returns Observable<Cliente[]>
   * @description Funcion que se encarga de obtener los datos de la tabla
   */
  public getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.apiUrl}/${this.url}`);
  }
  /**
   *
   * @param cliente Cliente
   * @returns Observable<Cliente[]>
   * @description Funcion que se encarga de editar los datos de la tabla
   */
  public actualizarClientes(cliente: Cliente) : Observable<Cliente[]> {
    return this.http.put<Cliente[]>(`${environment.apiUrl}/${this.url}`,
    cliente);

  }
  /**
   * @param cliente Cliente
   * @returns Observable<Cliente[]>
   * @description Funcion que se encarga de crear los datos de la tabla
   */
  public agregarClientes(cliente: Cliente) : Observable<Cliente[]> {
    return this.http.post<Cliente[]>(`${environment.apiUrl}/${this.url}`,
    cliente);

  }
  /**
   *
   * @param cliente Cliente
   * @returns Observable<Cliente[]>
   * @description Funcion que se encarga de eliminar los datos de la tabla
   */
  public borrarClientes(cliente: Cliente) : Observable<Cliente[]> {
    return this.http.delete<Cliente[]>(
      `${environment.apiUrl}/${this.url}/${cliente.ccedula}`);

  }

}
