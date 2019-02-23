import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.page.html',
  styleUrls: ['./prestamo.page.scss'],
})
export class PrestamoPage implements OnInit {

  prestamos = [{
    date: new Date(2018, 8, 22),
    duration: '2 hours',
    origin: 'station A',
    return: 'station C'
  }, {
    date: new Date(2018, 9, 12),
    duration: '4 hours',
    origin: 'station D',
    return: 'station G'
  }, {
    date: new Date(2018, 11, 22),
    duration: '5 hours',
    origin: 'station B',
    return: 'station E'
  }, {
    date: new Date(2019, 1, 17),
    duration: '7 hours',
    origin: 'station A',
    return: 'station H'
  }]

  constructor() { }

  ngOnInit() {
  }

}
