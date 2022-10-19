export class  Insumos{
    constructor(nombre:string, marca:string, costo:number, proveedores:string){
        this.nombre = nombre;
        this.marca = marca;
        this.costo = costo;
        this.proveedores = proveedores;
    }

    nombre: string ="";
    marca: string ="";
    costo:number = 1;
    proveedores:string=""; 

}    