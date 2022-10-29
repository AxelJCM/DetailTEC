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
  /**
   *
   * @param trabajador
   * @returns true si el trabajador es el que se está editando
   */
  listaActualizada(trabajador: Trabajador[]){
    this.trabajador = trabajador;
  }
  /**
   * Crea un nuevo trabajador
   */
  crearTrabajador(){
    this.trabajadorAEditar = new Trabajador();
  }
  /**
   *
   * @param trabajadores Edita un trabajador
   * @returns true si el trabajador es el que se está editando
   */
  editTrabajador(trabajadores: Trabajador){
    this.trabajadorAEditar = trabajadores;
  }
}
