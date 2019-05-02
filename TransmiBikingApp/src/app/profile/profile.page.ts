import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AuthService } from '../servicio/auth.service';
import { FormPersonService } from '../servicio/form-person.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import * as $ from 'jquery';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  @Output() cerrar = new EventEmitter();
  @ViewChild('imageUser') inputImageUser: ElementRef;
  userInf: any;
  public display = false;
  public cambio = false;
  public InformacionUsuarioProvicional: any;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  constructor(private socialSharing: SocialSharing,
    private auth: AuthService,
    public inf: FormPersonService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit() {
    this.InformacionUsuario();
    this.onCancelarUsuario();
    $(document).on('click', '.pi-times', function () {
      // tslint:disable-next-line:no-debugger
      debugger;
      this.cambio = false;
      console.log('entre');
    });

  }

  shareWitheFriends() {
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });

    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

  seeMyRides() {
    for (let index = 0; index < 20; index++) {
      const ride = `your ride ${index + 1} `;
    }
  }

  InformacionUsuario() {
    this.userInf = {
      nombre: '',
      apellido: '',
      genero: '',
      celular: '',
      edad: '',
      url: '',
      email: ''
    };

    this.inf.ObtenerInformacion().valueChanges().subscribe((user) => {
      this.userInf = user;
    });

  }
  onUsuario(usuario) {
    this.InformacionUsuarioProvicional = {
      nombre: '',
      apellido: '',
      edad: '',
      url: '',
      celular: '',
    };
    this.InformacionUsuarioProvicional = usuario;
    this.showDialog();
  }

  onGuardarUsuarioUpdate() {
    if (this.inputImageUser.nativeElement.value !== '') {
      this.InformacionUsuarioProvicional.url = this.inputImageUser.nativeElement.value;
      this.inf.UpdateDatos(this.InformacionUsuarioProvicional);
    } else {
      this.inf.UpdateDatos(this.InformacionUsuarioProvicional);
    }

    this.onCancelarUsuario();
  }



  onCancelarUsuario() {
    this.InformacionUsuarioProvicional = null;
    this.display = false;
    this.cambio = false;
    this.cerrar.emit();
  }

  showDialog() {
    this.display = true;
    this.cambio = true;
  }

  onUpload(e) {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL()))
      .subscribe();
  }
}
