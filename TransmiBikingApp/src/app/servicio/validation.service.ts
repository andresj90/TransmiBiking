import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  /* Los siguientes metodos validan que el ingreso de datos a la base de datos sea hecho 
  correctamente*/
  validarCamposTextoPrestamos(fecha, origen) {
    if (fecha == '' || origen == '') {
      return false;
    } else {
      return true;
    }
  }

  validarCamposNumericosPrestano(cantidadAdulto, cantidadNino) {
    if (cantidadAdulto <= 0 && cantidadNino <= 0) {
      return false
    } else {
      return true;
    }
  }

  validarCampoContrasenaRegistro(passwordCandidato) {
    var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/g;
    if ((passwordCandidato.match(passw)) && passwordCandidato != '') {
      return true;
    }
    else {
      return false;
    }
  }

  validarCampoEdadRegistro(edadIngresada) {
    console.log(edadIngresada);
    if (edadIngresada >= 12) {
      return true;
    } else {
      return false;
    }
  }

  validarNombreRegistro(nombreIngresado, apellidoIngresado) {
    console.log(nombreIngresado + "  " +  apellidoIngresado);
    if(nombreIngresado == '' || apellidoIngresado == '' ){
      return false;
    }else {
      return true;
    }
  }

  validarCampoTelefonoRegistro(numeroIngresado) {
    console.log(numeroIngresado.length);
    String(numeroIngresado).length
    if ((/^[0-9]*$/g.test(numeroIngresado)) && (numeroIngresado.length == 10)) {
      return true;
    } else {
      return false;
    }
  }
}
