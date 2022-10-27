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

  public getProveedores() : Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${environment.apiUrl}/${this.url}`);
  }

  public actualizarProveedores(proveedor: Proveedor) : Observable<Proveedor[]> {
    return this.http.put<Proveedor[]>(`${environment.apiUrl}/${this.url}`,
    proveedor);

  }

  public agregarProveedores(proveedor: Proveedor) : Observable<Proveedor[]> {
    return this.http.post<Proveedor[]>(`${environment.apiUrl}/${this.url}`,
    proveedor);

  }

  public borrarProveedores(proveedor: Proveedor) : Observable<Proveedor[]> {
    return this.http.delete<Proveedor[]>(
      `${environment.apiUrl}/${this.url}/${proveedor.pcedulaJuridica}`);
  }
}
