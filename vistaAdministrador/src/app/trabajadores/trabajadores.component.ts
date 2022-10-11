import { Component, OnInit } from '@angular/core';
import { Trabajador } from './trabajador.model';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {
Trabajadores: any;

  constructor() { }

  ngOnInit(): void {
  }

  trabajador:Trabajador[]=[

    /* new Trabajador("Juan", "Perez Salas", 207580321, "13/05/2016", "14/02/1991", 31, "holamundo", "pulidor", "Semanal"),
    new Trabajador("Ricardo", "Solís Vargas", 204120369, "15/09/2017", "14/02/1995", 27, "helloworld", "Lavador", "Bisemanal"),
    new Trabajador("Andrés", "Cordero Brenes", 904510450, "10/09/2015", "20/12/1993", 29, "haloworld", "Lavador", "Semanal") */
  ];

  agregarTrabajador(){

    let miTrabajador=new Trabajador(this.cuadroNombre, this.cuadroApellido, this.cuadroCedula, this.cuadroFechaIngreso, this.cuadroFechaNacimiento,
      this.cuadroEdad, this.cuadroPassword, this.cuadroRol, this.cuadroTipoPago);
    
      this.trabajador.push(miTrabajador);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCedula:number=0;
  cuadroFechaIngreso:string="";
  cuadroFechaNacimiento:string="";
  cuadroEdad:number=0;
  cuadroPassword:string="";
  cuadroRol:string="";
  cuadroTipoPago:string="";
}
