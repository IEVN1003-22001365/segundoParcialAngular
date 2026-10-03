import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-zoodiaco',
  styleUrl: './zoodiaco.css',
  templateUrl: './zoodiaco.html',
})
export class Zoodiaco {
  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  sexo: string = '';
  dia: number | null = null;
  mes: number | null = null;
  anio: number | null = null;

  mostrarResultado: boolean = false;
  nombreCompleto: string = '';
  edadCalculada: number = 0;
  nombreSigno: string = '';
  imagenSignoUrl: string = '';

  imprimir(): void {
    if (this.dia < 1 || this.dia > 31) {
    alert('El día debe ser entre 1 y 31.');
    return;
  }

  if (this.mes < 1 || this.mes > 12) {
    alert('El mes debe ser entre 1 y 12.');
    return;
  }

  if (this.anio < 0 || this.anio > 2026) {
    alert('El año no es válido o es del futuro.');
    return;
  }
    this.nombreCompleto = `${this.nombre} ${this.apaterno} ${this.amaterno}`;
    const anioActual = 2026;
    this.edadCalculada = anioActual - this.anio;

    const residuo = this.anio % 12;

    switch (residuo) {
      case 0:
        this.nombreSigno = 'mono';
        this.imagenSignoUrl = 'https://static.vecteezy.com/system/resources/previews/002/185/144/non_2x/chinese-zodiac-sign-animal-monkey-cartoon-ape-lunar-astrology-drawing-vector.jpg';
        break;
      case 1:
        this.nombreSigno = 'gallo';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BDcIVOL1yDZNNXGdu0YM7dMhWmxj0l6zBY8AkpkT_g&s=10';
        break;
      case 2:
        this.nombreSigno = 'perro';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoHmDUxleWvHla-EO8x2yh2qV4VR0cikuzJA9NX_rwQ&s=10';
        break;
      case 3:
        this.nombreSigno = 'cerdo';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPtSlRMhY28iTFKRHbZltcsYughfO58-dY9atkFkFYQ&s=10';
        break;
      case 4:
        this.nombreSigno = 'rata';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHKrjoe0UlAzob-bIzDDk1hvBjcZvEJSkPr9n9k5a_g&s=10';
        break;
      case 5:
        this.nombreSigno = 'buey';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9lCe4ECh-C_XDeN1dWMWvWKfnFj8w5luYkEiZt-igQ&s=10';
        break;
      case 6:
        this.nombreSigno = 'tigre';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLh2IWWT0zyKqEHzYUd3hLAV2p_6Y7Jb3of2WXb7gJNw&s=10';
        break;
      case 7:
        this.nombreSigno = 'conejo';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJZ4oujPeSJBvDDN3Ieyt19UN8k4w7xQPJnT5-qwP7w&s=10';
        break;
      case 8:
        this.nombreSigno = 'dragón';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFzHyiPMu9zr5DQaFNaBRnFNuL9m6xyWbVQiZlF-osw&s=10';
        break;
      case 9:
        this.nombreSigno = 'serpiente';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvZy2W45uWNV4J1uoKDFehfWa-jlvx1l5FEuLNB96Og&s=10';
        break;
      case 10:
        this.nombreSigno = 'caballo';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2O2SmPjq8arpxFG79MjDmSsIr9aQov3Ksf9JrvM7pA&s=10';
        break;
      case 11:
        this.nombreSigno = 'cabra';
        this.imagenSignoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrCDYcQjTziJwZnzLj7x6HRzLdFZHw6HJOm0ebYDUyA&s=10';
        break;
    }

    this.mostrarResultado = true;
  }
}