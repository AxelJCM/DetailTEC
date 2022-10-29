import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from '../servicios/api/api.service'
import { LoginI } from '../modelos/login.interface'
import { ResponseI } from '../modelos/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
/**
 * @description Funcion que se encarga de crear el formulario
 * con sus respectivas validaciones
 * @returns FormGroup
 */
  loginForm = new FormGroup({
    usuario : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })
  /**
   * @description Funcion que se encarga de limpiar el formulario
   */
  get User(): FormControl{
    return this.loginForm.get('usuario') as FormControl;
  }
  /**
   * @description Funcion que se encarga de limpiar el formulario
   */
  get PWD(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
/**
 *
 * @param form LoginI
 * @returns ResponseI
 * @description Funcion que se encarga de enviar los datos del formulario al servicio
 * para que este los envie al backend y este los procese
 */
  onLogin(form:any){
    this.api.loginByEmailCliente(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      if(dataResponse.status == "Ok"){
        this.router.navigate(["menuCliente"]);
      }
      if(dataResponse.status == "Error"){
        this.api.loginByEmailAdmin(form).subscribe(data =>{
          let dataResponse:ResponseI = data;
          if(dataResponse.status == "Ok"){
            this.router.navigate(["menuAdmin"]);
          }
          if(dataResponse.status == "Error"){
            alert("Usuario o contraseña incorrectos");
          }
        })
      }
      })
}}
