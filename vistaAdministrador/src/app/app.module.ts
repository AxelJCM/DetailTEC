import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InsumoComponent } from './insumo/insumo.component';
import { LavadoComponent } from './lavado/lavado.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { EditarTrabajadorComponent } from './editar-trabajador/editar-trabajador.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { EditarProveedoresComponent } from './editar-proveedores/editar-proveedores.component';
import { EditarSucursalComponent } from './editar-sucursal/editar-sucursal.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { EditarLavadosComponent } from './editar-lavados/editar-lavados.component';
import { CitasComponent } from './citas/citas.component';
import { EditarCitasComponent } from './editar-citas/editar-citas.component';

const appRoutes:Routes=[
  /* {path: '', component:PrincipalComponent}, */
  {path: '', component:LoginComponent},
  {path: 'trabajadores', component:TrabajadoresComponent},
  {path: 'sucursales', component:SucursalesComponent},
  {path: 'proveedores', component:ProveedoresComponent},
  {path: 'insumo', component:InsumoComponent},
  {path: 'lavado', component:LavadoComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'menuAdmin', component:MenuComponent},
  {path: 'citas', component:CitasComponent},

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
    LavadoComponent,
    RegistroComponent,
    MenuComponent,
    EditarTrabajadorComponent,
    EditarClienteComponent,
    EditarProveedoresComponent,
    EditarSucursalComponent,
    EditarProductosComponent,
    EditarLavadosComponent,
    CitasComponent,
    EditarCitasComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
