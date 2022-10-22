import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trabajadorr } from '../modelos/trabajadores';
import { TrabajadoresService } from '../servicios/api/trabajadores.service';

@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent implements OnInit {
  @Input() trabajador?: Trabajadorr;
  @Output() trabajadoresActualizados = new EventEmitter<Trabajadorr[]>();
   
  constructor(private trabajadorService: TrabajadoresService) { }

  ngOnInit(): void {
  }

  actualizarTrabajador(trabajador:Trabajadorr){
    this.trabajadorService
    .actualizarTrabajadores(trabajador)
    .subscribe((trabajadores: Trabajadorr[]) => this.trabajadoresActualizados.emit(trabajadores));
  }

  borrarTrabajador(trabajador:Trabajadorr){
    this.trabajadorService
    .borrarTrabajadores(trabajador)
    .subscribe((trabajadores: Trabajadorr[]) => this.trabajadoresActualizados.emit(trabajadores));
  }

  agregarTrabajador(trabajador:Trabajadorr){
    this.trabajadorService
    .agregarTrabajadores(trabajador)
    .subscribe((trabajadores: Trabajadorr[]) => this.trabajadoresActualizados.emit(trabajadores));
  }

  

}