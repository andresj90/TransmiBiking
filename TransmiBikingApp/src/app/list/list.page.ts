import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


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

  constructor(private storage: Storage) { }

  generateBooking() {
    window.alert(`Se ha generado una reserva para ${this.reserva.dateReservation} 
    con origen en ${this.reserva.originReservation} y tipo de bicicleta para ${this.reserva.bykeType}`);
    this.storage.set('reserva', this.reserva);
  }
  ngOnInit() {
  }

}
