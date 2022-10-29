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

  loginForm = new FormGroup({
    usuario : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })

  get User(): FormControl{
    return this.loginForm.get('usuario') as FormControl;
  }

  get PWD(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form:any){
    this.api.loginByEmailCliente(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      if(dataResponse.status == "Ok"){
        this.router.navigate(["menuCliente"]);
      }
      if(dataResponse.status == "Error"){
        alert("Usuario o contraseña incorrectos");
      }
    })
  }

}
