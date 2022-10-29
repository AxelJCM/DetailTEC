import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citas } from 'src/app/citas/cita.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private url = "Citas";

  constructor(private http : HttpClient) { }

  public getCitas() : Observable<Citas[]> {
    return this.http.get<Citas[]>(`${environment.apiUrl}/${this.url}`);
  }

  public actualizarCitas(citas: Citas) : Observable<Citas[]> {
    return this.http.put<Citas[]>(`${environment.apiUrl}/${this.url}`,
    citas);

  }

  public agregarCitas(citas: Citas) : Observable<Citas[]> {
    return this.http.post<Citas[]>(`${environment.apiUrl}/${this.url}`,
    citas);

  }

  public borrarCitas(citas: Citas) : Observable<Citas[]> {
    return this.http.delete<Citas[]>(
      `${environment.apiUrl}/${this.url}/${citas.cplaca}`);

  }
}
