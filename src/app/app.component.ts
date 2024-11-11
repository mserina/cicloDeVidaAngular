import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';
import { Ciclo1Component } from "./ciclo1/ciclo1.component";
import { Ciclo2Component } from "./ciclo2/ciclo2.component";

@Component({
  selector: 'app-root',
  standalone: true,

  //NOTA: IMPORTAR Router Module para que pueda ir cambiando de componentes
  imports: [RouterModule,RouterOutlet, Ciclo1Component, Ciclo2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cicloVida';

  nombre:string = "";
}
