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

  public getLavados() : Observable<Lavado[]> {
    return this.http.get<Lavado[]>(`${environment.apiUrl}/${this.url}`);
  }

  public actualizarLavados(lavado: Lavado) : Observable<Lavado[]> {
    return this.http.put<Lavado[]>(`${environment.apiUrl}/${this.url}`,
    lavado);

  }

  public agregarLavados(lavado: Lavado) : Observable<Lavado[]> {
    return this.http.post<Lavado[]>(`${environment.apiUrl}/${this.url}`,
    lavado);

  }

  public borrarLavados(lavado: Lavado) : Observable<Lavado[]> {
    return this.http.delete<Lavado[]>(
      `${environment.apiUrl}/${this.url}/${lavado.ltipoLavado}`);
  }
}
