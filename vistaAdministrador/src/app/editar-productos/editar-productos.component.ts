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

  actualizarInsumos(productos:Insumos){
    this.productosService
    .actualizarProductos(productos)
    .subscribe((productos: Insumos[]) => this.productosActualizados.emit(productos));
  }

  borrarInsumos(productos:Insumos){
    this.productosService
    .borrarProductos(productos)
    .subscribe((productos: Insumos[]) => this.productosActualizados.emit(productos));
  }

  agregarInsumos(productos:Insumos){
    this.productosService
    .agregarProductos(productos)
    .subscribe((productos: Insumos[]) => this.productosActualizados.emit(productos));
  }
}
