export interface Mascota{
    id?:number;
    raza:string,
    nombre:string,
    especie:string,
    edad:string,
    sexo:string,
    enfermedades:string,
    descripcion:string,
    procedencia:string,
    imagen:string,
    estado:boolean,
    fecha_creado?:Date,
    fecha_actualizado?:Date
}
