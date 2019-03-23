import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.page.html',
  styleUrls: ['./prestamo.page.scss'],
})
export class PrestamoPage implements OnInit {
   
    stations = ['A','B','C','D','E','F'];
    hours = [2,3,4,5,6,7,8,9];

   prestamos = [
     {
      dateReservation : '',
      origin: '',
      bikeType: '',
      returnStation: `Estación ${this.stations[Math.floor(Math.random()*this.stations.length)]}`,
      time: `${this.hours[Math.floor(Math.random()*this.hours.length)]} Horas`
     }
   ]

  constructor() { }

  ObtenerPrestamos(){

  }

  ngOnInit() {
  }

}
