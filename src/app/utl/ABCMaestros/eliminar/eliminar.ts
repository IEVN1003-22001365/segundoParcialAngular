import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { MaestrosUtl } from '../maestrosUTL';
import { ProyectoapiService } from '../maestrosapi.service';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-eliminar',
  templateUrl: './eliminar.html',
})
export class Eliminar implements OnInit {

  formulario!: FormGroup;
  idmaestro: string = '';
  regMaestro: MaestrosUtl = {
    idmaestro: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  constructor(
    private route: ActivatedRoute,
    public maestrosUtl: ProyectoapiService,
    public fb: FormBuilder,
    public router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.formulario = this.fb.group({
      idmaestro: [''],
      nombre: [''],
      apaterno: [''],
      amaterno: [''],
      correo: ['']
    });

    this.idmaestro =
      this.route.snapshot.paramMap.get('idmaestro') || '';

    this.maestrosUtl.getMaestro(this.idmaestro).subscribe({
      next: (response) => {
        this.regMaestro = response.maestro || response.alumno;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al consultar el maestro:', error);
      }
    });

  }

  eliminar(): void {
    this.maestrosUtl.EliminaMaestro(parseInt(this.idmaestro)).subscribe({
      next: (response) => {
        alert('Maestro eliminado correctamente');
        this.router.navigate(['/utl/maestros']);
      },
      error: (error) => {
        console.error('Error al eliminar al maestro:', error);
        alert('Ocurrió un error al eliminar al maestro');
      }
    });
  }

}