import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface'
import { ResponseI } from '../../modelos/response.interface'
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'
import { PuntosI } from 'src/app/modelos/puntos.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="https://localhost:7185/api";

  constructor(private http:HttpClient) { }
  /**
   *
   * @param form LoginI
   * @returns ResponseI
   * @description Funcion que se encarga de enviar los datos del formulario al servicio
   */
  loginByEmailCliente(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "/Clientes/Login";
    return this.http.post<ResponseI>(direccion, form);
  }
  /**
   *
   * @param form LoginI
   * @returns ResponseI
   * @description Funcion que se encarga de enviar los datos del formulario al servicio
   */
  loginByEmailAdmin(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "/trabajadores/Login";
    return this.http.post<ResponseI>(direccion, form);
  }
  /**
   *
   * @param form PuntosI
   * @returns ResponseI
   * @description Funcion que se encarga de enviar los datos del formulario al servicio
   */
  puntos(form:LoginI):Observable<PuntosI>{
    let direccion = this.url + "";
    return this.http.post<PuntosI>(direccion, form);
  }
}
