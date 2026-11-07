import { MaestrosUtl, RespuestaMaestros } from '../maestrosUTL';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../maestrosapi.service';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MaestrosFilterPipe } from '../maestros-filter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, RouterLink, MaestrosFilterPipe, CommonModule],
  selector: 'app-maestros',
  templateUrl: './maestros.html',
})
export class Maestros implements OnInit {


  listFilter: string = '';
  maestroTitle: string = '';
  muestraImagen: boolean = false;

  dataSource: MaestrosUtl[] = [];

  constructor(public alumnosUtl: ProyectoapiService, private router: Router) { }

  ngOnInit(): void {
    this.cargarMaestros();
  }

  cargarMaestros(): void {

    this.alumnosUtl.getMaestros().subscribe({

      next: (response: RespuestaMaestros) => {

        console.log('Datos recibidos del API: ', response);

        this.dataSource = response.maestros;

      },

      error: (error) => {

        console.error('Error al consultar el API:', error);

      },

      complete: () => {

        console.log('Carga de alumnos finalizada');

      }

    });

  }


  editarMaestro(idmaestro: number): void {
    this.router.navigate(['/utl/editar-maestro', idmaestro]);
  }

  eliminarMaestro(idmaestro: number): void {
    this.router.navigate(['/utl/eliminar-maestro', idmaestro]);
  }

  showImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }

}
