import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../servicio/prestamo.service';
@Component({
  selector: 'app-lista-prestamos',
  templateUrl: './lista-prestamos.page.html',
  styleUrls: ['./lista-prestamos.page.scss'],
})
export class ListaPrestamosPage implements OnInit {
  stations = ['Cesar', 'B', 'C', 'D', 'Diana'];
  hours = [2, 3, 4, 5, 6, 7, 8, 9];
  public colum: any[];
  prestamo: any;

  constructor(public prestamoAuth: PrestamoService) {
  }

  ngOnInit() {
    this.MostrarColumnas();
    this.Variables();
    this.MostrarPrestamo();
  }
  MostrarColumnas() {
    this.colum = [
      { header: 'Numero' },
      { header: 'Fecha' },
      { header: 'Origin' },
      { header: 'bikeType' }
    ];
  }
  Variables() {
    this.prestamo = {
      fecha: '',
      ruta: '',
      adulto: '',
      nino: ''
    };
  }
  MostrarPrestamo() {
    this.prestamoAuth.ObtenerPrestamo().subscribe((prestamo) => {
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
