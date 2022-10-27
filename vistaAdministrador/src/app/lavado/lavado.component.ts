import { Component, Input, OnInit } from '@angular/core';
import { LavadosService } from '../servicios/api/lavados.service';
import { Lavado } from './lavado.module';
@Component({
  selector: 'app-lavado',
  templateUrl: './lavado.component.html',
  styleUrls: ['./lavado.component.css']
})
export class LavadoComponent implements OnInit {
  @Input() ltipoLavado?: Lavado;
  lavado: Lavado[]=[];
  lavadoAEditar?: Lavado;

  constructor(private lavadoService : LavadosService) { }

  ngOnInit(): void {
    this.lavadoService
    .getLavados()
    .subscribe((result: Lavado[]) => (this.lavado = result));
  }

  listaActualizada(lavado: Lavado[]){
    this.lavado = lavado;
  }

  crearLavado(){
    this.lavadoAEditar = new Lavado();
  }

  editLavado(lavados: Lavado){
    this.lavadoAEditar = lavados;
  }
}
