import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VistaCliente } from '../clientes-vista-cliente/clientes.model';
import { VistaClienteService } from '../servicios/api/vista-cliente.service';

@Component({
  selector: 'app-editar-cliente-vista-cliente',
  templateUrl: './editar-cliente-vista-cliente.component.html',
  styleUrls: ['./editar-cliente-vista-cliente.component.css']
})
export class EditarClienteVistaClienteComponent implements OnInit {
  @Input() vcliente?: VistaCliente;
  @Output() vclientesActualizados = new EventEmitter<VistaCliente[]>();

  constructor(private VistaClienteService: VistaClienteService) { }

  ngOnInit(): void {
  }

  actualizarVistaCliente(cliente:VistaCliente){
    this.VistaClienteService
    .actualizarVistaClientes(cliente)
    .subscribe((clientes: VistaCliente[]) => this.vclientesActualizados.emit(clientes));
  }

  borrarVistaCliente(cliente:VistaCliente){
    this.VistaClienteService
    .borrarVistaClientes(cliente)
    .subscribe((clientes: VistaCliente[]) => this.vclientesActualizados.emit(clientes));
  }

  agregarVistaCliente(cliente:VistaCliente){
    this.VistaClienteService
    .agregarVistaClientes(cliente)
    .subscribe((clientes: VistaCliente[]) => this.vclientesActualizados.emit(clientes));
  }
}
