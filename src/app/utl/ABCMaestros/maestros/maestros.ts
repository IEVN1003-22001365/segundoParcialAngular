import { MaestrosUTL } from '../maestrosUTL';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../maestrosapi.service';
import { MaestroFilterPipe } from '../maestros-filter.pipe';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-maestros',
  imports: [
    FormsModule,
    RouterLink,
    MaestroFilterPipe,
    CommonModule
  ],
  templateUrl: './maestros.html',
})
export class Maestros implements OnInit {
 
  listFilter: string = '';
  maestroTitle!: string;
  dataSource: MaestrosUTL[] = [];
 
  constructor(
    public MaestrosUtl: ProyectoapiService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}
 
  ngOnInit(): void {
    this.cargarMaestros();  
  }
 
  cargarMaestros(): void {
    this.MaestrosUtl.getMaestros().subscribe({
      next: (response: any) => {
        console.log('Respuesta completa de la API (Maestros):', response);
        // Si tu API regresa un objeto tipo { maestros: [...] } usa response.maestros, 
        // si regresa el arreglo directo, usa response (déjalo según te devuelva Flask).
        this.dataSource = response.maestros || response; 
        console.log('dataSource asignado:', this.dataSource);
        
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al consultar el API de maestros', error);
      },
      complete: () => {
        console.log('Carga de maestros finalizada');
      }
    });
  }

  editarMaestro(maestro: MaestrosUTL): void {
    console.log('Editar maestro:', maestro);
    // Aquí puedes agregar la redirección a tu ruta de edición
  }

  eliminarMaestro(maestro: MaestrosUTL): void {
    console.log('Eliminar maestro:', maestro);
    // Aquí puedes agregar la lógica para eliminar
  }
}
