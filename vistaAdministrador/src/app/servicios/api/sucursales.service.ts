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

  public getSucursales() : Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(`${environment.apiUrl}/${this.url}`);
  }

  public actualizarSucursales(sucursal: Sucursal) : Observable<Sucursal[]> {
    return this.http.put<Sucursal[]>(`${environment.apiUrl}/${this.url}`,
    sucursal);

  }

  public agregarSucursales(sucursal: Sucursal) : Observable<Sucursal[]> {
    return this.http.post<Sucursal[]>(`${environment.apiUrl}/${this.url}`,
    sucursal);

  }

  public borrarSucursales(sucursal: Sucursal) : Observable<Sucursal[]> {
    return this.http.delete<Sucursal[]>(
      `${environment.apiUrl}/${this.url}/${sucursal.snombre}`);
  }
}
