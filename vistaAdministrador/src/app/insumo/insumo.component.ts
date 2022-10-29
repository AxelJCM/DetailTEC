import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/api/productos.service';
import { Insumos } from './insumos.model';
@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.css']
})
export class InsumoComponent implements OnInit {
  @Input() pmarca?: Insumos;
  insumos: Insumos[]=[];
  insumoAEditar?: Insumos;

  constructor(private productosService : ProductosService) { }

  ngOnInit(): void {
    this.productosService
    .getInsumos()
    .subscribe((result: Insumos[]) => (this.insumos = result));
  }
  /**
   *
   * @param insumo Edita un insumo
   */
  listaActualizada(insumo: Insumos[]){
    this.insumos = insumo;
  }
  /**
   * Crea un nuevo insumo
   */
  crearInsumo(){
    this.insumoAEditar = new Insumos();
  }
  /**
   *
   * @param insumos Edita un insumo
   */
  editInsumo(insumos: Insumos){
    this.insumoAEditar = insumos;
  }

}
