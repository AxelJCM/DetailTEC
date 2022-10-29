import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientesCitas } from '../citas-cliente/citas-cliente.model';
import { CitasClientesService } from '../servicios/api/citas-clientes.service';

@Component({
  selector: 'app-editar-citas-cliente',
  templateUrl: './editar-citas-cliente.component.html',
  styleUrls: ['./editar-citas-cliente.component.css']
})
export class EditarCitasClienteComponent implements OnInit {
  @Input() ccitas?: ClientesCitas;
  @Output() clienteCitasActualizados = new EventEmitter<ClientesCitas[]>();

  constructor(private clienteCitasService: CitasClientesService) { }

  ngOnInit(): void {
  }

  actualizarClienteCitas(ccitas:ClientesCitas){
    this.clienteCitasService
    .actualizarClientesCitas(ccitas)
    .subscribe((ccitas: ClientesCitas[]) => this.clienteCitasActualizados.emit(ccitas));
  }

  borrarClienteCitas(ccitas:ClientesCitas){
    this.clienteCitasService
    .borrarClientesCitas(ccitas)
    .subscribe((ccitas: ClientesCitas[]) => this.clienteCitasActualizados.emit(ccitas));
  }

  agregarClienteCitas(ccitas:ClientesCitas){
    this.clienteCitasService
    .agregarClientesCitas(ccitas)
    .subscribe((ccitas: ClientesCitas[]) => this.clienteCitasActualizados.emit(ccitas));
  }
}
