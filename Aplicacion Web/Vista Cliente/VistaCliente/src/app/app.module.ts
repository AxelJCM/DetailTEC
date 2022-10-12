import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuclienteComponent } from './menucliente/menucliente.component';
import { GestpuntosComponent } from './gestpuntos/gestpuntos.component';

const appRoutes:Routes=[
  {path: '', component:LoginComponent}
,{path: 'menucliente', component:MenuclienteComponent}
,{path: '', component:GestpuntosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuclienteComponent,
    GestpuntosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
