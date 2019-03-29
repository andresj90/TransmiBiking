import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { PrestamoService } from '../servicio/prestamo.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  data: any;

  constructor(private nativeStorage: NativeStorage,
    public auth: PrestamoService,
    public flashMensaje: FlashMessagesService) {

    this.DatosReserva();
  }

  /*  generateBooking() {
      window.alert(`Se ha generado una reserva para ${this.dateReservation}
      con origen en ${this.origin} y tipo de bicicleta para ${this.bikeType}`);
      this.nativeStorage.setItem('reserva', { reserva: this.dateReservation })
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
    }
    displayReservation() {
      this.nativeStorage.getItem('reserva')
        .then(
          data => console.log(data),
          error => console.error(error)
        );
    }*/
  ngOnInit() {
  }

  DatosReserva() {
    this.data = {
      dateReservation: '',
      origin: '',
      bikeType: '',
      returnStation: '',
      time: ''
    };
  }

  crearReserva() {
    this.auth.createPrestamo(this.data).then(() => {
    }, (error) => {
        // alerta
    });
  }

}
