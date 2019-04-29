import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
 /* Los siguientes metodos validan que el ingreso de datos a la base de datos sea hecho 
 correctamente*/ 
  validarCamposTextoPrestamos(fecha, origen){
     if(fecha == '' || origen == '') {
        return false; 
     }else{
       return true; 
     }
  }

  validarCamposNumericosPrestano(cantidadAdulto, cantidadNino){
    if(cantidadAdulto <=0 && cantidadNino <=0){
      return false 
    }else{
      return true;
    }
  }
}
