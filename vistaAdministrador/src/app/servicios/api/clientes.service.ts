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

  public getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.apiUrl}/${this.url}`);
  }

  public actualizarClientes(cliente: Cliente) : Observable<Cliente[]> {
    return this.http.put<Cliente[]>(`${environment.apiUrl}/${this.url}`,
    cliente);

  }

  public agregarClientes(cliente: Cliente) : Observable<Cliente[]> {
    return this.http.post<Cliente[]>(`${environment.apiUrl}/${this.url}`,
    cliente);

  }

  public borrarClientes(cliente: Cliente) : Observable<Cliente[]> {
    return this.http.delete<Cliente[]>(
      `${environment.apiUrl}/${this.url}/${cliente.ccedula}`);

  }

}
