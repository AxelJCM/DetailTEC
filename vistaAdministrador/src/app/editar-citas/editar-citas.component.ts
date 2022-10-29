import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Citas } from '../citas/cita.model';
import { PuntosI } from '../modelos/puntos.interface';
import { ApiService } from '../servicios/api/api.service';
import { CitasService } from '../servicios/api/citas.service';

@Component({
  selector: 'app-editar-citas',
  templateUrl: './editar-citas.component.html',
  styleUrls: ['./editar-citas.component.css']
})
export class EditarCitasComponent implements OnInit {
  @Input() citas?: Citas;
  @Output() citasActualizados = new EventEmitter<Citas[]>();

  constructor(private citasService: CitasService, private api:ApiService, private router:Router) { }

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


  puntosForm = new FormGroup({
    puntos : new FormControl('', [Validators.required]),
    cedula : new FormControl('', [Validators.required]),
  })

  get Puntos(): FormControl{
    return this.puntosForm.get('puntos') as FormControl;
  }

  get Cedula(): FormControl{
    return this.puntosForm.get('cedula') as FormControl;
  }

  onPuntos(form:any){
    this.api.puntos(form).subscribe(data =>{
      let dataResponse:PuntosI = data;
      /* if(dataResponse.puntos == "Ok"){
        this.router.navigate(["menuCliente"]);
      }
      if(dataResponse.puntos == "Error"){
        alert("Usuario o contraseña incorrectos");
      } */
    })
  }
}
