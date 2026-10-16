import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { TicketCinepolis } from '../cine';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css'
})
export class Ventas implements OnInit {

  ventas: TicketCinepolis[] = [];
  formularioEdicion!: FormGroup;
  indiceEdicion: number = -1;
  errorEdicion: string = '';
  
  mostrarModal: boolean = false;

  ngOnInit(): void {
    this.cargarVentas();
    this.formularioEdicion = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(1),
      tarjetaCineco: new FormControl('no'),
      boletos: new FormControl(1)
    });
  }

  cargarVentas(): void {
    const datos = localStorage.getItem('ventas_cinepolis');
    if (datos) {
      this.ventas = JSON.parse(datos);
    }
  }

  eliminarVenta(index: number): void {
    this.ventas.splice(index, 1);
    localStorage.setItem('ventas_cinepolis', JSON.stringify(this.ventas));
  }
  editarVenta(index: number): void {
    this.indiceEdicion = index;
    const venta = this.ventas[index];

    this.formularioEdicion.patchValue({
      nombre: venta.nombre,
      compradores: venta.compradores,
      tarjetaCineco: venta.tarjetaCineco,
      boletos: venta.boletos
    });
    this.errorEdicion = '';
    this.mostrarModal = true; 
  }

  actualizarVenta(): void {
    if (this.indiceEdicion === -1) return;

    const nombre = this.formularioEdicion.value.nombre || '';
    const compradores = Number(this.formularioEdicion.value.compradores) || 0;
    const boletos = Number(this.formularioEdicion.value.boletos) || 0;
    const tieneTarjeta = this.formularioEdicion.value.tarjetaCineco === 'si';
    const maxBoletosPermitidos = compradores * 7;

    if (boletos > maxBoletosPermitidos) {
      this.errorEdicion = `Máximo 7 boletos por persona. Permitidos: ${maxBoletosPermitidos}`;
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

    this.ventas[this.indiceEdicion] = {
      nombre: nombre,
      compradores: compradores,
      boletos: boletos,
      tarjetaCineco: this.formularioEdicion.value.tarjetaCineco,
      totalPagar: total,
      error: ''
    };

    localStorage.setItem('ventas_cinepolis', JSON.stringify(this.ventas));
    this.cerrarModal();
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.indiceEdicion = -1;
    this.errorEdicion = '';
    this.formularioEdicion.reset({
      nombre: '',
      compradores: 1,
      tarjetaCineco: 'no',
      boletos: 1
    });
  }
}