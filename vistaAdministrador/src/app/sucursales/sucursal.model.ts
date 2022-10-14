export class Sucursal{

    constructor(nombre:string, provinvia:string, canton:string, distrito:string, telefono:string, fechaApertura:string,
        gerente:string, fechaInicioGerencia:string){

        this.nombre=nombre;
        this.provincia=provinvia;
        this.canton=canton;
        this.distrito=distrito;
        this.telefono=telefono;
        this.fechaApertura=fechaApertura;
        this.gerente=gerente;
        this.fechaInicioGerencia=fechaInicioGerencia
    }

    nombre:string="";
    provincia:string="";
    canton:string="";
    distrito:string="";
    telefono:string="";
    fechaApertura:string="";
    gerente:string="";
    fechaInicioGerencia:string=""
}