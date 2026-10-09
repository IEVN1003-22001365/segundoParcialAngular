import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-lista-escuela',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './lista-escuela.html',
  styleUrl: './lista-escuela.css'
})
export class ListaEscuela implements OnInit {

  formulario!: FormGroup;

  nuevoAlumno: Alumno = {
    matricula: 'xxx',
    nombre: 'xxx',
    correo: 'xx',
    materia: 'xxx'
  };

  ngOnInit(): void {
    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl('')
    });
  }

  muestraAlumno(): void {
    this.nuevoAlumno = {
      matricula: this.formulario.value.matricula,
      nombre: this.formulario.value.nombre,
      correo: this.formulario.value.correo,
      materia: this.formulario.value.materia
    };
  }
}