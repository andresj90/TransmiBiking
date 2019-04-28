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

  createPrestamo(data: { fecha: Date, ruta: String, adulto: number, nino: number }) {
    // trae iud de usuario login console.log(this.getIud());
    return this.db.collection('informacionUsuario').doc(this.auth.getIud()).collection('ListprestamoBici').add(data);
  }
  ObtenerPrestamos() {
    return this.db.collection('informacionUsuario').doc(this.auth.getIud()).collection('ListprestamoBici').snapshotChanges();
  }
  ActualizarPrestamo(id, data) {
    return this.db.collection('informacionUsuario').doc(this.auth.getIud()).collection('ListprestamoBici').doc(id).set(data);
  }
  ObtenerPrestamo(id) {
    return this.db.collection('informacionUsuario').doc(this.auth.getIud()).collection('ListprestamoBici').doc(id).snapshotChanges();
  }

}
