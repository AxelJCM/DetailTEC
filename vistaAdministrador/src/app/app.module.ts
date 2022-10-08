import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { InsumoComponent } from './insumo/insumo.component';

const appRoutes:Routes=[
  {path: '', component:PrincipalComponent},
  {path: 'login', component:LoginComponent},
  {path:'insumo', component:InsumoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    InsumoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
