import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proveedor } from '../proveedores/proveedores.model';
import { ProveedoresService } from '../servicios/api/proveedores.service';

@Component({
  selector: 'app-editar-proveedores',
  templateUrl: './editar-proveedores.component.html',
  styleUrls: ['./editar-proveedores.component.css']
})
export class EditarProveedoresComponent implements OnInit {
  @Input() proveedor? : Proveedor;
  @Output() proveedoresActualizados = new EventEmitter<Proveedor[]>();

  constructor(private proveedorService : ProveedoresService) { }

  ngOnInit(): void {
  }
/**
 *
 * @param proveedor Edita un proveedor
 */
  actualizarProveedor(proveedor:Proveedor){
    this.proveedorService
    .actualizarProveedores(proveedor)
    .subscribe((proveedores: Proveedor[]) => this.proveedoresActualizados.emit(proveedores));
  }
/**
 *
 * @param proveedor Elimina un proveedor
 */
  borrarProveedor(proveedor:Proveedor){
    this.proveedorService
    .borrarProveedores(proveedor)
    .subscribe((proveedores: Proveedor[]) => this.proveedoresActualizados.emit(proveedores));
  }
/**
 *
 * @param proveedor Crea un nuevo proveedor
 */
  agregarProveedor(proveedor:Proveedor){
    this.proveedorService
    .agregarProveedores(proveedor)
    .subscribe((proveedores: Proveedor[]) => this.proveedoresActualizados.emit(proveedores));
  }
}
