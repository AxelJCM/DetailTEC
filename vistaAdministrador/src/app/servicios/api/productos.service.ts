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

  public getInsumos() : Observable<Insumos[]> {
    return this.http.get<Insumos[]>(`${environment.apiUrl}/${this.url}`);
  }

  public actualizarProductos(insumo: Insumos) : Observable<Insumos[]> {
    return this.http.put<Insumos[]>(`${environment.apiUrl}/${this.url}`,
    insumo);

  }

  public agregarProductos(insumo: Insumos) : Observable<Insumos[]> {
    return this.http.post<Insumos[]>(`${environment.apiUrl}/${this.url}`,
    insumo);

  }

  public borrarProductos(insumo: Insumos) : Observable<Insumos[]> {
    return this.http.delete<Insumos[]>(
      `${environment.apiUrl}/${this.url}/${insumo.pmarca}`);

  }
}
