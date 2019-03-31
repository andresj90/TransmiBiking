import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../servicio/auth.service';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore,
    public auth: AuthService
  ) { }

  createPrestamo(data: { dateReservation: String, origin: String, bikeType: String }) {
    // trae iud de usuario login console.log(this.getIud());
    return this.db.collection('informacionUsuario').doc(this.auth.getIud()).collection('prestamoBici').doc(this.auth.getIud()).set(data);
  }
  mostrarPrestamo() {
    return this.db.collection('informacionUsuario').doc(this.auth.getIud()).collection('prestamoBici').snapshotChanges();
  }
}
