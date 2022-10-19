import { Component, OnInit } from '@angular/core';
import { Lavadoo } from './lavadoo.module';
@Component({
  selector: 'app-lavado',
  templateUrl: './lavado.component.html',
  styleUrls: ['./lavado.component.css']
})
export class LavadoComponent implements OnInit {
Lavado:any
  constructor() { }

  ngOnInit(): void {
  }
  lavadoo: Lavadoo[]=[

  ];

  agregarLavado(){
    let miLavadoo=new Lavadoo(this.cuadroTipo, this.cuadroCosto, this.cuadroPrecio, this.cuadroDuracion, this.cuadroProducto, this.cuadroPersonal, this.cuadroPuntuacion);
    this.lavadoo.push(miLavadoo);
  }
  cuadroTipo: string="";
  cuadroCosto: number = 0;
  cuadroPrecio: number = 0;
  cuadroDuracion: number = 0;
  cuadroProducto: string = "";
  cuadroPersonal: number = 0;
  cuadroPuntuacion: number = 0;
}
