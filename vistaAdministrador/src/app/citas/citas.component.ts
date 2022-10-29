import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PuntosI } from '../modelos/puntos.interface';
import { ApiService } from '../servicios/api/api.service';
import { CitasService } from '../servicios/api/citas.service';
import { Citas } from './cita.model';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  @Input() cplaca?: Citas;
  citas: Citas[]=[];
  citaAEditar?: Citas;

  constructor(private citasService : CitasService) { }

  ngOnInit(): void {
    this.citasService
    .getCitas()
    .subscribe((result: Citas[]) => (this.citas = result));
  }

  listaActualizada(cita: Citas[]){
    this.citas = cita;
  }

  crearCita(){
    this.citaAEditar = new Citas();
  }

  editCita(citas: Citas){
    this.citaAEditar = citas;
  }
}
