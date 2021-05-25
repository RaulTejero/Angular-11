export class Data {
    nombre: string;
    numero: number;
    color: string;
    activo: boolean;
    constructor(pnombre: string, pnumero:number, pcolor:string, pactivo:boolean){
        this.nombre = pnombre,
        this.numero = pnumero,
        this.color = pcolor,
        this.activo = pactivo
    }
}