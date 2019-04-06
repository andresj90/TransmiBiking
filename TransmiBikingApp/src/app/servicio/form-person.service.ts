import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../servicio/auth.service';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FormPersonService {
  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore,
    public auth: AuthService
  ) { }

  creardatos(informacion: {nombre: string, apellido: string, genero: number, celular: string , edad: number}) {
    return this.db.collection('informacionUsuario').doc(this.auth.getIud()).set(informacion);
  }
  ObtenerInformacion() {
    return this.db.collection('informacionUsuario').doc(this.auth.getIud());
  }
}
