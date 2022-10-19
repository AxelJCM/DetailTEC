import { Component, OnInit } from '@angular/core';
import { Insumos } from './insumos.model';
@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.css']
})
export class InsumoComponent implements OnInit {
Insumo: any
  constructor() { }

  ngOnInit(): void {
  }
  insumos: Insumos[]=[

  ];

  agregarInsumo(){
    let miInsumos=new Insumos(this.cuadroNombre,this.cuadroMarca, this.cuadroCosto, this.cuadroProveedores);
    
      this.insumos.push(miInsumos);
  }

  cuadroNombre:string="";
  cuadroCosto:number=0;
  cuadroMarca:string="";
  cuadroProveedores:string="";

}
