import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MaestrosUtl, RespuestaMaestros } from "./maestrosUTL";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProyectoapiService {

    constructor(private http: HttpClient) { }

    public getMaestros(): Observable<RespuestaMaestros> {
        return this.http.get<RespuestaMaestros>('http://127.0.0.1:5000/api/maestros/');
    }

    agregarNuevoMaestro(datos: MaestrosUtl) {
        return this.http.post('http://127.0.0.1:5000/api/maestros/', datos);
    }

    public getMaestro(mat: string): Observable<any> {
        console.log("idmaestro " + mat);
        return this.http.get<any>(`http://127.0.0.1:5000/api/maestros/${mat}`);
    }

    modificarMaestro(mat: number, datos: MaestrosUtl) {
        return this.http.put('http://127.0.0.1:5000/api/maestros/' + mat, datos);
    }

    public EliminaMaestro(mat: number): Observable<MaestrosUtl> {
        return this.http.delete<MaestrosUtl>('http://127.0.0.1:5000/api/maestros/' + mat);
    }
}