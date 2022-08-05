export class Tesis {
    _id?:number;
    tipo:string;
    tema:string;
    resumen:string;
    fecha_publicacion:Date;
    autor1:string
    autor2:string;
    autor3:string;
    carrera:string;
    archivo:string;
    tipo_contenido:string;
    palabras_clave:string;

    constructor(tipo:string,tema:string,resumen:string,fecha_publicacion:Date,autor1:string,autor2:string,autor3:string,carrera:string,archivo:string,tipo_contenido:string,palabras_clave:string){
        this.tipo = tipo;
        this.tema = tema;
        this.resumen = resumen;
        this.fecha_publicacion = fecha_publicacion;
        this.autor1 = autor1;
        this.autor2 = autor2;
        this.autor3= autor3;
        this.carrera = carrera;
        this.archivo = archivo;
        this.tipo_contenido = tipo_contenido;
        this.palabras_clave = palabras_clave;


    }


}