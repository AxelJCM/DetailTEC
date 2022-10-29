import { Component, Input, OnInit } from '@angular/core';
import { SucursalesService } from '../servicios/api/sucursales.service';
import { Sucursal } from './sucursal.model';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  @Input() snombre?: Sucursal;
  sucursal: Sucursal[]=[];
  sucursalAEditar?: Sucursal;

  constructor(private sucursalService : SucursalesService) { }

  ngOnInit(): void {
    this.sucursalService
    .getSucursales()
    .subscribe((result: Sucursal[]) => (this.sucursal = result));
  }
  /**
   *
   * @param sucursal Edita una sucursal
   */
  listaActualizada(sucursal: Sucursal[]){
    this.sucursal = sucursal;
  }
  /**
   * Crea una nueva sucursal
   */
  crearSucursal(){
    this.sucursalAEditar = new Sucursal();
  }
  /**
   *
   * @param sucursales Edita una sucursal
   */
  editSucursal(sucursales: Sucursal){
    this.sucursalAEditar = sucursales;
  }
}
