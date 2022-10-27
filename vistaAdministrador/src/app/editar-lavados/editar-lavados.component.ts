import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lavado } from '../lavado/lavado.module';
import { LavadosService } from '../servicios/api/lavados.service';

@Component({
  selector: 'app-editar-lavados',
  templateUrl: './editar-lavados.component.html',
  styleUrls: ['./editar-lavados.component.css']
})
export class EditarLavadosComponent implements OnInit {
  @Input() lavado? : Lavado;
  @Output() lavadosActualizados = new EventEmitter<Lavado[]>();
 
  constructor(private lavadoService : LavadosService) { }

  ngOnInit(): void {
  }

  actualizarLavado(lavado:Lavado){
    this.lavadoService
    .actualizarLavados(lavado)
    .subscribe((lavados: Lavado[]) => this.lavadosActualizados.emit(lavados));
  }

  borrarLavado(lavado:Lavado){
    this.lavadoService
    .borrarLavados(lavado)
    .subscribe((lavados: Lavado[]) => this.lavadosActualizados.emit(lavados));
  }
 
  agregarLavado(lavado:Lavado){
    this.lavadoService
    .agregarLavados(lavado)
    .subscribe((lavados: Lavado[]) => this.lavadosActualizados.emit(lavados));
  }
}
