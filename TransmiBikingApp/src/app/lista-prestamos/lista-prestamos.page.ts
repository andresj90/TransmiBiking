import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../servicio/prestamo.service';
@Component({
  selector: 'app-lista-prestamos',
  templateUrl: './lista-prestamos.page.html',
  styleUrls: ['./lista-prestamos.page.scss'],
})
export class ListaPrestamosPage implements OnInit {
  public colum: any[];
  public prestamo = [];

  constructor(public prestamoAuth: PrestamoService) {
  }

  ngOnInit() {
    this.MostrarColumnas();
    this.Variables();
    this.MostrarPrestamo();
  }
  MostrarColumnas() {
    this.colum = [
      { field: 'fecha' , header: 'Fecha' },
      { field: 'ruta' , header: 'Ruta' },
      { field: 'adulto' , header: 'Adulto' },
      { field: 'nino' , header: 'Niño' }
    ];
  }
  Variables() {
  }
  MostrarPrestamo() {
    this.prestamoAuth.ObtenerPrestamo().subscribe((prestamo) => {
      this.prestamo = [];
      prestamo.forEach((prestamodata: any) => {
        this.prestamo.push({
          id: prestamodata.payload.doc.id,
          fecha: prestamodata.payload.doc.data().fecha,
          ruta: prestamodata.payload.doc.data().ruta,
          adulto: prestamodata.payload.doc.data().adulto,
          nino: prestamodata.payload.doc.data().nino
        });
      });
    });
  }

}
