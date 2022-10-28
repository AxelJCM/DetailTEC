import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Citas } from '../citas/cita.model';
import { CitasService } from '../servicios/api/citas.service';

@Component({
  selector: 'app-editar-citas',
  templateUrl: './editar-citas.component.html',
  styleUrls: ['./editar-citas.component.css']
})
export class EditarCitasComponent implements OnInit {
  @Input() citas?: Citas;
  @Output() citasActualizados = new EventEmitter<Citas[]>();

  constructor(private citasService: CitasService) { }

  ngOnInit(): void {
  }

  actualizarCitas(citas:Citas){
    this.citasService
    .actualizarCitas(citas)
    .subscribe((citas: Citas[]) => this.citasActualizados.emit(citas));
  }

  borrarCitas(citas:Citas){
    this.citasService
    .borrarCitas(citas)
    .subscribe((citas: Citas[]) => this.citasActualizados.emit(citas));
  }

  agregarCitas(citas:Citas){
    this.citasService
    .agregarCitas(citas)
    .subscribe((citas: Citas[]) => this.citasActualizados.emit(citas));
  }

}
