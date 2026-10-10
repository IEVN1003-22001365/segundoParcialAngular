import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TicketCinepolis } from '../cine';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css'
})
export class Cinepolis implements OnInit {

  formulario!: FormGroup;

  ticket: TicketCinepolis = {
    nombre: '',
    compradores: 0,
    boletos: 0,
    tarjetaCineco: 'no',
    totalPagar: 0,
    error: ''
  };

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      cantidadCompradores: new FormControl(),
      tarjetaCineco: new FormControl(''),
      boletos: new FormControl()
    });
  }

  procesarCompra(): void {
    const nombre = this.formulario.value.nombre || '';
    const compradores = Number(this.formulario.value.cantidadCompradores) || 0;
    const boletos = Number(this.formulario.value.boletos) || 0;
    const tieneTarjeta = this.formulario.value.tarjetaCineco === 'si';
    const maxBoletosPermitidos = compradores * 7;
    if (boletos > maxBoletosPermitidos) {
      this.ticket = {
        nombre: nombre,
        compradores: compradores,
        boletos: boletos,
        tarjetaCineco: this.formulario.value.tarjetaCineco,
        totalPagar: 0,
        error: `No se pueden comprar más de 7 boletos por persona. Máximo permitido para ${compradores} persona(s): ${maxBoletosPermitidos} boletos.`
      };
      return;
    }

    const precioBoleto = 12;
    let total = boletos * precioBoleto;

    if (boletos > 5) {
      total = total - (total * 0.15);
    } else if (boletos >= 3) {
      total = total - (total * 0.10);
    }

    if (tieneTarjeta) {
      total = total - (total * 0.10);
    }

    this.ticket = {
      nombre: nombre,
      compradores: compradores,
      boletos: boletos,
      tarjetaCineco: this.formulario.value.tarjetaCineco,
      totalPagar: total,
      error: ''
    };
  }

  salir(): void {
    this.formulario.reset({
      nombre: '',
      cantidadCompradores: 1,
      tarjetaCineco: 'no',
      boletos: 1
    });
    this.ticket = {
      nombre: '',
      compradores: 0,
      boletos: 0,
      tarjetaCineco: 'no',
      totalPagar: 0,
      error: ''
    };
  }
}
