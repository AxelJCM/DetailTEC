import { Component, Input, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/api/proveedores.service';
import { Proveedor } from './proveedores.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  @Input() pcedulaJuridica?: Proveedor;
  proveedor: Proveedor[]=[];
  proveedorAEditar?: Proveedor;

  constructor(private proveedorService : ProveedoresService) { }

  ngOnInit(): void {
    this.proveedorService
    .getProveedores()
    .subscribe((result: Proveedor[]) => (this.proveedor = result));
  }

  listaActualizada(proveedor: Proveedor[]){
    this.proveedor = proveedor;
  }

  crearProveedor(){
    this.proveedorAEditar = new Proveedor();
  }

  editProveedor(proveedores: Proveedor){
    this.proveedorAEditar = proveedores;
  }

}

