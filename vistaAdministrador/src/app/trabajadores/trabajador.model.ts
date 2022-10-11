export class Trabajador{

    constructor(nombre:string, apellidos:string, cedula:number, fechaIngreso:string, fechaNacimiento:string, edad:number, password:string, rol:string, tipoPago:string){

        this.nombre=nombre;
        this.apellidos=apellidos;
        this.cedula=cedula;
        this.fechaIngreso=fechaIngreso;
        this.fechaNacimiento=fechaNacimiento;
        this.edad=edad;
        this.password=password;
        this.rol=rol;
        this.tipoPago=tipoPago;
    }

    nombre:string="";
    apellidos:string="";
    cedula:number=0;
    fechaIngreso:string="";
    fechaNacimiento:string="";
    edad:number=0;
    password:string="";
    rol:string="";
    tipoPago:string="";
}