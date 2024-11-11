import { Routes } from '@angular/router';

//NOTA: AGREGAR LA IMPORTACION PARA CADA OBJETO RUTA DEL COMPONENTE QUE SE VAYA AÑADIENDO
import { Ciclo1Component } from './ciclo1/ciclo1.component';
import { Ciclo2Component } from './ciclo2/ciclo2.component';

//AQUI SE ESPECIFICA LAS RUTAS DE LOS COMPONNETES, ESTO FUNCIONA COMO UN ARRAY
//CADA OBJETO ES UNA RUTA , LA PRIMERA CLAVE ES EL PATH Y LA SEGUNDA CLAVE ES EL COMPONENT
export const routes: Routes = [

    {path:'ciclo1', component: Ciclo1Component},
    {path:'ciclo2', component: Ciclo2Component}
];
