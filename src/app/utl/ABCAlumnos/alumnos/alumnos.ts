import { AlumnosUtl, RespuestaAlumnos } from '../alumnosUTL';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../alumnosapi.service';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AlumnosFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';

@Component({
    imports: [FormsModule, RouterLink, AlumnosFilterPipe, CommonModule],
    selector: 'app-alumnos',
    templateUrl: './alumnos.html',
})

export class Alumnos implements OnInit {

    listFilter: string = '';
    alumnoTitle: string = '';
    muestraImagen: boolean = false;

    dataSource: AlumnosUtl[] = [];

    constructor(public alumnosUtl: ProyectoapiService, private router: Router) { }

    ngOnInit(): void {
        this.cargarAlumnos();
    }

    cargarAlumnos(): void {

        this.alumnosUtl.getAlumnos().subscribe({

            next: (response: RespuestaAlumnos) => {

                console.log('Datos recibidos del API: ', response);

                this.dataSource = response.alumnos;

            },

            error: (error) => {

                console.error('Error al consultar el API:', error);

            },

            complete: () => {

                console.log('Carga de alumnos finalizada');

            }

        });

    }

    // Navega enviando la matrícula a la ruta que configuramos
    editarAlumno(matricula: number): void {
        this.router.navigate(['/utl/editar', matricula]);
    }

    eliminarAlumno(matricula: number): void {
        this.router.navigate(['/utl/eliminar', matricula]);
    }

    showImage(): void {
        this.muestraImagen = !this.muestraImagen;
    }

}