export class Proveedor{

    constructor(nombre:string, apellidos:string, cedulaJuridica:number, direccion:string, correo:string, contacto:string){

        this.nombre=nombre;
        this.apellidos=apellidos;
        this.cedulaJuridica=cedulaJuridica;
        this.direccion=direccion;
        this.correo=correo;
        this.contacto=contacto;
    }

    nombre:string="";
    apellidos:string="";
    cedulaJuridica:number=0;
    direccion:string="";
    correo:string="";
    contacto:string="";
}