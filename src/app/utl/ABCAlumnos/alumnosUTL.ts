export interface AlumnosUtl {
    matricula: number;
    nombre: string;
    apaterno: string;
    amaterno: string;
    correo: string;
}

export interface RespuestaAlumnos {
    alumnos: AlumnosUtl[];
    exito: boolean;
    mensaje: string;
    
}