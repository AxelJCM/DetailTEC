import { Component, Input, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/api/clientes.service';
import { Cliente } from './registro.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @Input() ccedula?: Cliente;
  cliente: Cliente[]=[];
  clienteAEditar?: Cliente;

  constructor(private clienteService : ClientesService) { }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe((result: Cliente[]) => (this.cliente = result));
  }
  /**
   *
   * @param cliente Edita un cliente
   */
  listaActualizada(cliente: Cliente[]){
    this.cliente = cliente;
  }
  /**
   * Crea un nuevo cliente
   */
  crearCliente(){
    this.clienteAEditar = new Cliente();
  }
  /**
   *
   * @param clientes Edita un cliente
   */
  editCliente(clientes: Cliente){
    this.clienteAEditar = clientes;
  }
}
