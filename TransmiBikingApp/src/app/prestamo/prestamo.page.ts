import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../servicio/prestamo.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ValidationService } from '../servicio/validation.service';


@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.page.html',
  styleUrls: ['./prestamo.page.scss'],
})
export class PrestamoPage implements OnInit {
  data: any;

  constructor(
    public auth: PrestamoService,
    public flashMensaje: FlashMessagesService,
    private datePicker: DatePicker,
    private validation: ValidationService
  ) {}

  ngOnInit() {
    this.DatosReserva();
  }

  DatosReserva() {
    this.data = {
      fecha: '',
      ruta: '',
      adulto: '',
      nino: ''
    };
  }

  crearReserva() {
    if (!this.validation.validarCamposTextoPrestamos(this.data.fecha, this.data.ruta)) {
      console.log('Todos los campos deben contener datos')
      // this.flashMensaje.show('Todos los campos deben contener datos', {cssClass: 'alert-danger', timeout: 5000});
    }else if(!this.validation.validarCamposNumericosPrestano(this.data.adulto, this.data.nino)){
      this.flashMensaje.show('Se debe solicitar almenos 1 bicicleta', {cssClass: 'alert-danger', timeout: 5000});
    }else{
      this.auth.createPrestamo(this.data).then(() => {
        this.flashMensaje.show('Prestamo procesado', {cssClass: 'alert-success', timeout: 5000});
      }, (error) => {
        // alerta
      });
    }
  }

  Calendario() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
