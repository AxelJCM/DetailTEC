import { Component, OnInit } from '@angular/core';
import { Proveedor } from './proveedores.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  proveedor:Proveedor[]=[

    /* new Trabajador("Juan", "Perez Salas", 207580321, "13/05/2016", "14/02/1991", 31, "holamundo", "pulidor", "Semanal"),
    new Trabajador("Ricardo", "Solís Vargas", 204120369, "15/09/2017", "14/02/1995", 27, "helloworld", "Lavador", "Bisemanal"),
    new Trabajador("Andrés", "Cordero Brenes", 904510450, "10/09/2015", "20/12/1993", 29, "haloworld", "Lavador", "Semanal") */
  ];

  agregarProveedor(){

    let miProveedor=new Proveedor(this.cuadroNombre, this.cuadroApellido, this.cuadroCedulaJuridica, this.cuadroDireccion, this.cuadroCorreo,
      this.cuadroContacto);
    
      this.proveedor.push(miProveedor);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCedulaJuridica:number=0;
  cuadroDireccion:string="";
  cuadroCorreo:string="";
  cuadroContacto:string="";
}

