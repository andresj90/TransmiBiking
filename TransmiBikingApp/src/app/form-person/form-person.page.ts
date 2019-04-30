import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormPersonService } from '../servicio/form-person.service';
import { AuthService } from '../servicio/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/observable';
import { AngularFireStorage } from 'angularfire2/storage';
import { ValidationService } from '../servicio/validation.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.page.html',
  styleUrls: ['./form-person.page.scss'],
})
export class FormPersonPage implements OnInit {
  private informacion: any;
  public email: string;
  private password: string;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  foto: any;

  constructor(public authService: FormPersonService,
    private router: Router,
    public auth: AuthService,
    private storage: AngularFireStorage,
    private validation: ValidationService,
    public alertController: AlertController
  ) { }
  @ViewChild('imageUser') inputImageUser: ElementRef;
  ngOnInit() {
    this.CrearInformacionUsuario();
  }

  CrearInformacionUsuario() {
    this.informacion = {
      nombre: '',
      apellido: '',
      genero: '',
      celular: '',
      edad: '',
      url: '',
      email: ''
    };
  }

  EnviarDatos(datos) {
    console.log(datos);
    console.log(this.informacion);
    //validaciones 
    if (!this.validation.validarCampoContrasenaRegistro(this.password)) {
      console.log(this.password)
      this.presentAlert("La contraseña debe ser entre 8 - 16 caracteres debe contener al menos una mayúscula, minúscula y un numero");
    } else if (!this.validation.validarNombreRegistro(this.informacion.nombre, this.informacion.apellido)) {
      console.log(`${this.informacion.nombre} ${this.informacion.apellido}`)
      this.presentAlert("Los campos nombre y apellido no pueden estar vacíos");
    } else if (!this.validation.validarCampoTelefonoRegistro(this.informacion.celular)) {
      console.log(this.informacion.celular)
      this.presentAlert("El campo celular es numérico y debe contener 10 dígitos");
    } else if (!this.validation.validarCampoEdadRegistro(this.informacion.edad)) {
      console.log(this.informacion.edad)
      this.presentAlert("El usuario debe tener mínimo 10 años para poder registrarse")
    } else {
      this.auth.registeruser(this.email, this.password)
        .then((res) => {
          if (this.inputImageUser.nativeElement.value !== '') {
            this.foto = this.inputImageUser.nativeElement.value;
          } else {
            this.foto = 'https://angellomix.com/wp-content/uploads/2016/10/login.png';
          }
          this.informacion.url = this.foto;
          this.informacion.email = this.email;
          this.authService.creardatos(this.informacion).then((ress) => {
            this.presentAlertConfirm();
          });
        }).catch((err) => {
          console.log(err);
        });
    }
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


  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Registro prestamo',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: 'Registro procesado',
      buttons: [
        {
          text: 'Okay',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

}

