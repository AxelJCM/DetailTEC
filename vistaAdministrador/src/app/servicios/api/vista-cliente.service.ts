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

  public getVistaClientes() : Observable<VistaCliente[]> {
    return this.http.get<VistaCliente[]>(`${environment.apiUrl}/${this.url}`);
  }

  public actualizarVistaClientes(cliente: VistaCliente) : Observable<VistaCliente[]> {
    return this.http.put<VistaCliente[]>(`${environment.apiUrl}/${this.url}`,
    cliente);

  }

  public agregarVistaClientes(cliente: VistaCliente) : Observable<VistaCliente[]> {
    return this.http.post<VistaCliente[]>(`${environment.apiUrl}/${this.url}`,
    cliente);

  }

  public borrarVistaClientes(cliente: VistaCliente) : Observable<VistaCliente[]> {
    return this.http.delete<VistaCliente[]>(
      `${environment.apiUrl}/${this.url}/${cliente.ccedula}`);

  }
}
