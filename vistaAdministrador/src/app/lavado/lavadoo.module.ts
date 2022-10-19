export class Lavadoo{
   constructor (tipo: string, costo:number, precio:number, duracion:number, producto:string, personal:number, puntuacion:number){
    this.tipo = tipo;
    this.costo = costo;
    this.precio = precio;
    this.duracion = duracion;
    this.producto = producto;
    this.personal = personal;
    this.puntuacion = puntuacion; 
   }
   tipo: string ="";
   costo: number = 0;
   precio: number = 0;
   duracion: number = 0;
   producto: string ="";
   personal: number = 0;
   puntuacion: number = 0;
}