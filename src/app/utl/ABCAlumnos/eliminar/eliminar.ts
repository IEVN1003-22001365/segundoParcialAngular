import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Importar ChangeDetectorRef
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { AlumnosUtl } from './../alumnosUTL';
import { ProyectoapiService } from '../alumnosapi.service';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-eliminar',
  templateUrl: './eliminar.html',
})
export class Eliminar implements OnInit {

  formulario!: FormGroup;
  matricula: string = '';
  regAlumno: AlumnosUtl = {
    matricula: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  constructor(
    private route: ActivatedRoute,
    public alumnosUtl: ProyectoapiService,
    public fb: FormBuilder,
    public router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.formulario = this.fb.group({
      matricula: [''],
      nombre: [''],
      apaterno: [''],
      amaterno: [''],
      correo: ['']
    });

    this.matricula =
      this.route.snapshot.paramMap.get('matricula') || '';

    this.alumnosUtl.getAlumno(this.matricula).subscribe({
      next: (response) => {
        this.regAlumno = response.alumno;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al consultar el alumno:', error);
      }
    });

  }

  eliminar(): void {
    this.alumnosUtl.EliminaAlumno(parseInt(this.matricula)).subscribe({
      next: (response) => {
        alert('Alumno eliminado correctamente');
        this.router.navigate(['/utl/alumnos']);
      },
      error: (error) => {
        console.error('Error al eliminar el alumno:', error);
        alert('Ocurrió un error al eliminar el alumno');
      }
    });
  }

}