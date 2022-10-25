import { Component, Input, OnInit } from '@angular/core';
import { TrabajadoresService } from '../servicios/api/trabajadores.service';
import { Trabajador } from './trabajador.model';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  @Input() tcedula?: Trabajador;
  trabajador: Trabajador[]=[];
  trabajadorAEditar?: Trabajador;

  constructor(private trabajadorService : TrabajadoresService) { }

  ngOnInit(): void {
    this.trabajadorService
    .getTrabajadores()
    .subscribe((result: Trabajador[]) => (this.trabajador = result));
  }

  listaActualizada(trabajador: Trabajador[]){
    this.trabajador = trabajador;
  }

  crearTrabajador(){
    this.trabajadorAEditar = new Trabajador();
  }

  editTrabajador(trabajadores: Trabajador){
    this.trabajadorAEditar = trabajadores;
  }


}
