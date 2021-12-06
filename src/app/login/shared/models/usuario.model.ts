export class Usuario {
    id_usuario: string;
    id_rol: number;

    constructor(id_usuario?: string, id_rol?: number){
        this.id_usuario = id_usuario === undefined ? '' : id_usuario;
        this.id_rol = id_rol === undefined ? -1 : id_rol;
    }
}