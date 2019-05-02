import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../servicio/prestamo.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ValidationService } from '../servicio/validation.service';
import { AlertController } from '@ionic/angular';

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
    private validation: ValidationService,
    public alertController: AlertController
  ) { }

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
    if (!this.validation.validarCamposNumericosPrestano(this.data.adulto, this.data.nino)) {
      this.presentAlert("El prestamo debe contener al menos una bicicleta");
    } else {
      this.auth.createPrestamo(this.data).then(() => {
        this.presentAlertConfirm();
        
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

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Registro prestamo',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: 'Prestamo procesado',
      buttons: [
        {
          text: 'Okay',
          cssClass: 'secondary',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

}
