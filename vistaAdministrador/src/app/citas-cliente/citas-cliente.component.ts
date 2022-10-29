import { Component, Input, OnInit } from '@angular/core';
import { Citas } from '../citas/cita.model';
import { ClientesVistaClienteComponent } from '../clientes-vista-cliente/clientes-vista-cliente.component';
import { CitasClientesService } from '../servicios/api/citas-clientes.service';

@Component({
  selector: 'app-citas-cliente',
  templateUrl: './citas-cliente.component.html',
  styleUrls: ['./citas-cliente.component.css']
})
export class CitasClienteComponent implements OnInit {
  @Input() cplaca?: Citas;
  Ccitas: Citas[]=[];
  clienteCitaAEditar?: Citas;

  constructor(private ClientesCitasService : CitasClientesService) { }

  ngOnInit(): void {
    this.ClientesCitasService
    .getClientesCitas()
    .subscribe((result: Citas[]) => (this.Ccitas = result));
  }

  listaActualizada(Ccita: Citas[]){
    this.Ccitas = Ccita;
  }

  crearClientesCita(){
    this.clienteCitaAEditar = new Citas();
  }

  editClientesCita(Ccitas: Citas){
    this.clienteCitaAEditar = Ccitas;
  }
}
