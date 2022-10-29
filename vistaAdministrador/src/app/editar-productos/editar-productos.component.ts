import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Insumos } from '../insumo/insumos.model';
import { ProductosService } from '../servicios/api/productos.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
  @Input() productos?: Insumos;
  @Output() productosActualizados = new EventEmitter<Insumos[]>();

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
  }
/**
 *
 * @param productos Edita un producto
 */
  actualizarInsumos(productos:Insumos){
    this.productosService
    .actualizarProductos(productos)
    .subscribe((productos: Insumos[]) => this.productosActualizados.emit(productos));
  }
/**
 *
 * @param productos Elimina un producto
 */
  borrarInsumos(productos:Insumos){
    this.productosService
    .borrarProductos(productos)
    .subscribe((productos: Insumos[]) => this.productosActualizados.emit(productos));
  }
/**
 *
 * @param productos Crea un nuevo producto
 */
  agregarInsumos(productos:Insumos){
    this.productosService
    .agregarProductos(productos)
    .subscribe((productos: Insumos[]) => this.productosActualizados.emit(productos));
  }
}
