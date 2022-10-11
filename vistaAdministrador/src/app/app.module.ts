import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
=======
import { InsumoComponent } from './insumo/insumo.component';
>>>>>>> Vista-Administrador
=======
import { InsumoComponent } from './insumo/insumo.component';
>>>>>>> Vista-Administrador

const appRoutes:Routes=[
  {path: '', component:PrincipalComponent},
  {path: 'login', component:LoginComponent},
<<<<<<< HEAD
<<<<<<< HEAD
  {path: 'trabajadores', component:TrabajadoresComponent},
  {path: 'sucursales', component:SucursalesComponent},
  {path: 'proveedores', component:ProveedoresComponent}
=======
  {path:'insumo', component:InsumoComponent}
>>>>>>> Vista-Administrador
=======
  {path:'insumo', component:InsumoComponent}
>>>>>>> Vista-Administrador
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    TrabajadoresComponent,
    SucursalesComponent,
    ProveedoresComponent
=======
    InsumoComponent
>>>>>>> Vista-Administrador
=======
    InsumoComponent
>>>>>>> Vista-Administrador
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
