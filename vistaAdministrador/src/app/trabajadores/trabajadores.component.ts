import { Component, Input, OnInit } from '@angular/core';
import { Trabajadorr } from '../modelos/trabajadores';
import { TrabajadoresService } from '../servicios/api/trabajadores.service';
import { Trabajador } from './trabajador.model';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  @Input() cedula?: Trabajadorr;
  trabajador: Trabajadorr[]=[];
  trabajadorAEditar?: Trabajadorr;

  constructor(private trabajadorService : TrabajadoresService) { }

  ngOnInit(): void {
    this.trabajadorService
    .getTrabajadores()
    .subscribe((result: Trabajadorr[]) => (this.trabajador = result));
  }

  listaActualizada(trabajador: Trabajadorr[]){
    this.trabajador = trabajador;
  }

  crearTrabajador(){
    this.trabajadorAEditar = new Trabajadorr();
  }

  editTrabajador(trabajadores: Trabajadorr){
    this.trabajadorAEditar = trabajadores;
  }


}
