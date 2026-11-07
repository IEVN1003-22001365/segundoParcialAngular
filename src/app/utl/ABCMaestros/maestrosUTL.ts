export interface MaestrosUtl {
    idmaestro: number;
    nombre: string;
    apaterno: string;
    amaterno: string;
    correo: string;
}

export interface RespuestaMaestros {
    maestros: MaestrosUtl[];
    exito: boolean;
    mensaje: string;
}