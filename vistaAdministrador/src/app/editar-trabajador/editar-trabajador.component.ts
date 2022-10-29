import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrabajadoresService } from '../servicios/api/trabajadores.service';
import { Trabajador } from '../trabajadores/trabajador.model';

@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent implements OnInit {
  @Input() trabajador?: Trabajador;
  @Output() trabajadoresActualizados = new EventEmitter<Trabajador[]>();

  constructor(private trabajadorService: TrabajadoresService) { }

  ngOnInit(): void {
  }

  actualizarTrabajador(trabajador:Trabajador){
    this.trabajadorService
    .actualizarTrabajadores(trabajador)
    .subscribe((trabajadores: Trabajador[]) => this.trabajadoresActualizados.emit(trabajadores));
  }

  borrarTrabajador(trabajador:Trabajador){
    this.trabajadorService
    .borrarTrabajadores(trabajador)
    .subscribe((trabajadores: Trabajador[]) => this.trabajadoresActualizados.emit(trabajadores));
  }

  agregarTrabajador(trabajador:Trabajador){
    this.trabajadorService
    .agregarTrabajadores(trabajador)
    .subscribe((trabajadores: Trabajador[]) => this.trabajadoresActualizados.emit(trabajadores));
  }

}
