import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../servicio/prestamo.service';
@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.page.html',
  styleUrls: ['./prestamo.page.scss'],
})
export class PrestamoPage implements OnInit {

  stations = ['A', 'B', 'C', 'D', 'E', 'F'];
  hours = [2, 3, 4, 5, 6, 7, 8, 9];
  public prestamo = [];

  constructor(public prestamoAuth: PrestamoService) { }

  ngOnInit() {
    this.MostrarPrestamo();
  }

  MostrarPrestamo() {
    // trae todos los comentarios
    this.prestamoAuth.mostrarPrestamo().subscribe((prestamo) => {
      this.prestamo = [];
      prestamo.forEach((prestamodata: any) => {
        this.prestamo.push({
          id: prestamodata.payload.doc.id,
          data: prestamodata.payload.doc.data()
        });
      });
    });
  }

}
