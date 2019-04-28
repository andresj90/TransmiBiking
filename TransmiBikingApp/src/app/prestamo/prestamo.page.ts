import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { PrestamoService } from '../servicio/prestamo.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DatePicker } from '@ionic-native/date-picker/ngx';
@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.page.html',
  styleUrls: ['./prestamo.page.scss'],
})
export class PrestamoPage implements OnInit {
  data: any;

  constructor(private nativeStorage: NativeStorage,
    public auth: PrestamoService,
    public flashMensaje: FlashMessagesService,
    private datePicker: DatePicker
  ) {

    this.DatosReserva();
  }

  ngOnInit() {
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
    this.auth.createPrestamo(this.data).then(() => {
    }, (error) => {
      // alerta
    });
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
