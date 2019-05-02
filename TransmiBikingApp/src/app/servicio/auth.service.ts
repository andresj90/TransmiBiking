import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { getToken } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static isAuthorized = false;
  static inicio = false;
  static salir = true;
  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore
  ) {
  }

  registeruser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          console.log(userData);
          resolve(userData);
        },
          err => reject(err));
    });
  }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => {
          this.isLoguedIn(userData.user.isAnonymous);
          resolve(userData);
        },
          err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.subscribe(auth => auth);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  getIud() {
    return firebase.auth().currentUser.uid;
  }

  isLoguedIn(loginStatus) {
    if (loginStatus === false) {
      AuthService.isAuthorized = true;
    } else {
      AuthService.isAuthorized = false;
    }
  }

}
