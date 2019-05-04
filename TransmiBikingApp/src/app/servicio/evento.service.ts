import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class EventoService {


  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore
  ) { }

  obtenerColeccionEvento() {
    this.db.collection('eventos').get().subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        return doc.data();
      });
    }, error => {
      console.log(error);
    });
  }
}
