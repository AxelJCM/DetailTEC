import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '../registro/registro.model';
import { ClientesService } from '../servicios/api/clientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  @Input() cliente?: Cliente;
  @Output() clientesActualizados = new EventEmitter<Cliente[]>();

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
  }
/**
 *
 * @param cliente Edita un cliente
 */
  actualizarCliente(cliente:Cliente){
    this.clienteService
    .actualizarClientes(cliente)
    .subscribe((clientes: Cliente[]) => this.clientesActualizados.emit(clientes));
  }
/**
 *
 * @param cliente Elimina un cliente
 */
  borrarCliente(cliente:Cliente){
    this.clienteService
    .borrarClientes(cliente)
    .subscribe((clientes: Cliente[]) => this.clientesActualizados.emit(clientes));
  }
/**
 *
 * @param cliente Crea un nuevo cliente
 */
  agregarCliente(cliente:Cliente){
    this.clienteService
    .agregarClientes(cliente)
    .subscribe((clientes: Cliente[]) => this.clientesActualizados.emit(clientes));
  }

}
