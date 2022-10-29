import { Component, Input, OnInit } from '@angular/core';
import { VistaClienteService } from '../servicios/api/vista-cliente.service';
import { VistaCliente } from './clientes.model';

@Component({
  selector: 'app-clientes-vista-cliente',
  templateUrl: './clientes-vista-cliente.component.html',
  styleUrls: ['./clientes-vista-cliente.component.css']
})
export class ClientesVistaClienteComponent implements OnInit {
  @Input() ccedula?: VistaCliente;
  vcliente: VistaCliente[]=[];
  vclienteAEditar?: VistaCliente;

  constructor(private VistaClienteService : VistaClienteService) { }

  ngOnInit(): void {
    this.VistaClienteService
    .getVistaClientes()
    .subscribe((result: VistaCliente[]) => (this.vcliente = result));
  }
  /**
   * Actualiza el listado de clientes
   * @param vcliente
   */
  listaActualizada(vcliente: VistaCliente[]){
    this.vcliente = vcliente;
  }
/**
 * Crea un nuevo cliente
 */
  crearVCliente(){
    this.vclienteAEditar = new VistaCliente();
  }
/**
 *
 * @param vclientes Edita un cliente
 */
  editVCliente(vclientes: VistaCliente){
    this.vclienteAEditar = vclientes;
  }

}
