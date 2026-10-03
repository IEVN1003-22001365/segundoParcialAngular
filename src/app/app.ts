import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Zoodiaco } from './formulario/zoodiaco/zoodiaco';

@Component({
  selector: 'app-root',
  imports: [Zoodiaco],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('segundoparcialAngular');

  ngOnInit(): void {
    initFlowbite();
  }
}