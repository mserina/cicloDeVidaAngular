import { AfterContentInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-ciclo1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ciclo1.component.html',
  styleUrl: './ciclo1.component.css'
})
export class Ciclo1Component implements  OnDestroy {

  
  

  /*@Input()*/ nombre:string = "pieas";
  
  //Vamos a inyectar el servicio mensaje
  constructor(private mensaje:MensajeService){}
 
  /*
  ngOnChanges(){
    console.log('Soy ngoChanges');
  }

  */

  ngOnInit(): void {
    console.log('Soy ngOnInit');
    this.mensaje.setMensaje('Soy ngONInit');
  }

  /*
  ngAfterContentInit(): void {
    console.log('Soy ngAfterContentInit');
  }
  */

  ngOnDestroy(): void {
    console.log('Soy ngOnDestroy de ciclo 1');
  }

}


