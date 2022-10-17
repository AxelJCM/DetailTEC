import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InsumoComponent } from './insumo/insumo.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes:Routes=[
  {path: '', component:PrincipalComponent},
  {path: 'login', component:LoginComponent},
  {path: 'trabajadores', component:TrabajadoresComponent},
  {path: 'sucursales', component:SucursalesComponent},
  {path: 'proveedores', component:ProveedoresComponent},
  {path: 'insumo', component:InsumoComponent},
  {path: 'menuAdmin', component:MenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    TrabajadoresComponent,
    SucursalesComponent,
    ProveedoresComponent,
    InsumoComponent,
    MenuComponent,

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
