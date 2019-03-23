import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  public dateReservation : String;
  public origin: String;
  public bikeType: String; 
  public returnStation: String; 
  public time: String;

  constructor(private nativeStorage: NativeStorage) { }

  generateBooking() {
    window.alert(`Se ha generado una reserva para ${this.dateReservation}
    con origen en ${this.origin} y tipo de bicicleta para ${this.bikeType}`);
    this.nativeStorage.setItem('reserva', {reserva: this.dateReservation})
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
