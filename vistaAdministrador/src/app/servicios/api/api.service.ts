import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface'
import { responseI } from '../../modelos/response.interface'
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /* url:string="http://solodata.es/" */
  url:string="https://localhost:7185/api/Cliente"

  constructor(private http:HttpClient) { }

  loginByEmail(form: any){/* :LoginI):Observable<responseI>{
    let direccion = this.url;
    return this.http.post<responseI>(direccion, form); */
    console.log(form);
  }
}
/* https://localhost:7185/api/Cliente */