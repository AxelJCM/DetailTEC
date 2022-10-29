import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientesCitas } from 'src/app/citas-cliente/citas-cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitasClientesService {
  private url = "Citas";

  constructor(private http : HttpClient) { }

  public getClientesCitas() : Observable<ClientesCitas[]> {
    return this.http.get<ClientesCitas[]>(`${environment.apiUrl}/${this.url}`);
  }

  public actualizarClientesCitas(citas: ClientesCitas) : Observable<ClientesCitas[]> {
    return this.http.put<ClientesCitas[]>(`${environment.apiUrl}/${this.url}`,
    citas);

  }

  public agregarClientesCitas(citas: ClientesCitas) : Observable<ClientesCitas[]> {
    return this.http.post<ClientesCitas[]>(`${environment.apiUrl}/${this.url}`,
    citas);

  }

  public borrarClientesCitas(citas: ClientesCitas) : Observable<ClientesCitas[]> {
    return this.http.delete<ClientesCitas[]>(
      `${environment.apiUrl}/${this.url}/${citas.cplaca}`);

  }
}
