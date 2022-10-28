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

  listaActualizada(cliente: Cliente[]){
    this.cliente = cliente;
  }

  crearCliente(){
    this.clienteAEditar = new Cliente();
  }

  editCliente(clientes: Cliente){
    this.clienteAEditar = clientes;
  }
}
