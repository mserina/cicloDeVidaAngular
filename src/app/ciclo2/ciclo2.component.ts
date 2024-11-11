import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-ciclo2',
  standalone: true,
  imports: [],
  templateUrl: './ciclo2.component.html',
  styleUrl: './ciclo2.component.css'
})
export class Ciclo2Component implements OnInit {


  constructor(private mensajeService: MensajeService){}

  ngOnInit(){
    console.log(this.mensajeService.getMensaje());
  }
}
