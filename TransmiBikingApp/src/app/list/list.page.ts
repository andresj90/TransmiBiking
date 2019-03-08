import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  reserva =
    {
      dateReservation: '',
      originReservation: '',
      bykeType: ''
    }

  constructor(private nativeStorage: NativeStorage) { }

  generateBooking() {
    window.alert(`Se ha generado una reserva para ${this.reserva.dateReservation}
    con origen en ${this.reserva.originReservation} y tipo de bicicleta para ${this.reserva.bykeType}`);
    this.nativeStorage.setItem('reserva', this.reserva)
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
  }
  ngOnInit() {
  }

}
