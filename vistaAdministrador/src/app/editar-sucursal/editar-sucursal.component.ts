import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SucursalesService } from '../servicios/api/sucursales.service';
import { Sucursal } from '../sucursales/sucursal.model';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {
  @Input() sucursal? : Sucursal;
  @Output() sucursalesActualizadas = new EventEmitter<Sucursal[]>();
 
  constructor(private sucursalService : SucursalesService) { }

  ngOnInit(): void {
  }

  actualizarSucursal(sucursal:Sucursal){
    this.sucursalService
    .actualizarSucursales(sucursal)
    .subscribe((sucursales: Sucursal[]) => this.sucursalesActualizadas.emit(sucursales));
  }

  borrarSucursal(sucursal:Sucursal){
    this.sucursalService
    .borrarSucursales(sucursal)
    .subscribe((sucursales: Sucursal[]) => this.sucursalesActualizadas.emit(sucursales));
  }
 
  agregarSucursal(sucursal:Sucursal){
    this.sucursalService
    .agregarSucursales(sucursal)
    .subscribe((sucursales: Sucursal[]) => this.sucursalesActualizadas.emit(sucursales));
  }
}