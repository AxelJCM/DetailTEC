import { Component, OnInit } from '@angular/core';
import { Sucursal } from './sucursal.model';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sucursal:Sucursal[]=[

    /* new Trabajador("Juan", "Perez Salas", 207580321, "13/05/2016", "14/02/1991", 31, "holamundo", "pulidor", "Semanal"),
    new Trabajador("Ricardo", "Solís Vargas", 204120369, "15/09/2017", "14/02/1995", 27, "helloworld", "Lavador", "Bisemanal"),
    new Trabajador("Andrés", "Cordero Brenes", 904510450, "10/09/2015", "20/12/1993", 29, "haloworld", "Lavador", "Semanal") */
  ];

  agregarSucursal(){

    let miSucursal=new Sucursal(this.cuadroNombre, this.cuadroProvincia, this.cuadroCanton, this.cuadroDistrito, this.cuadroTelefono,
      this.cuadroFechaApertura, this.cuadroGerente, this.cuadroFechaInicioGerencia);
    
      this.sucursal.push(miSucursal);
  }

  cuadroNombre:string="";
  cuadroProvincia:string="";
  cuadroCanton:string="";
  cuadroDistrito:string="";
  cuadroTelefono:string="";
  cuadroFechaApertura:string="";
  cuadroGerente:string="";
  cuadroFechaInicioGerencia:string="";
}
