import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensaje: string = "";

 getMensaje(){
  return this.mensaje
 }

 setMensaje(msg:string){
    this.mensaje = msg;
 }
}
