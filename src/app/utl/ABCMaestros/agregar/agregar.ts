import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MaestrosUtl } from '../maestrosUTL';

import { Router, RouterLink } from '@angular/router';
import { ProyectoapiService } from '../maestrosapi.service';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-agregar',
  templateUrl: './agregar.html',
})
export class Agregar implements OnInit{
  formGroup!: FormGroup;

  regAlumno: MaestrosUtl = {
    idmaestro: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  constructor(
    private fb: FormBuilder,
    public alumnosutl: ProyectoapiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      idmaestro: [''],
      nombre: [''],
      apaterno: [''],
      amaterno: [''],
      correo: ['']
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      console.log('El formulario contiene datos inválidos');
      return;
    }

    const datos: MaestrosUtl = this.formGroup.getRawValue();

    console.log('Datos que se enviarán:', datos);

    this.alumnosutl.agregarNuevoMaestro(datos).subscribe({
      next: (respuesta) => {
        console.log('Respuesta de Flask:', respuesta);
        alert('Alumno registrado correctamente');

        this.formGroup.reset();

        this.router.navigate(['/utl/maestros']);
      },
      error: (error) => {
        console.error('Error al registrar al maestro:', error);

        const mensaje =
          error.error?.mensaje ||
          error.error?.error ||
          error.message ||
          'Ocurrió un error al registrar al maestro';

        alert(mensaje);
      }
    });
  }


}