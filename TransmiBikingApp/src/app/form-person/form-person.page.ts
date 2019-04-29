import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormPersonService } from '../servicio/form-person.service';
import { AuthService } from '../servicio/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/observable';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.page.html',
  styleUrls: ['./form-person.page.scss'],
})
export class FormPersonPage implements OnInit {
  private informacion: any;
  public email: string;
  public password: string;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  foto: any;
  constructor(public authService: FormPersonService,
    private router: Router,
    public auth: AuthService,
    private storage: AngularFireStorage,
  ) {
    this.CrearInformacionUsuario();
  }
  @ViewChild('imageUser') inputImageUser: ElementRef;
  ngOnInit() {

  }

  CrearInformacionUsuario() {
    this.informacion = {
      id: '',
      nombre: '',
      apellido: '',
      genero: '',
      celular: '',
      edad: '',
      url: '',
      email: ''
    };
  }

  EnviarDatos() {
    this.auth.registeruser(this.email, this.password)
      .then((res) => {
        if (this.inputImageUser.nativeElement.value !== '') {
          this.foto = this.inputImageUser.nativeElement.value;
        } else {
          this.foto = 'https://angellomix.com/wp-content/uploads/2016/10/login.png';
        }
        this.informacion.url = this.foto;
        // tslint:disable-next-line:no-debugger
        debugger;
        this.authService.creardatos(this.informacion).then((ress) => {
          console.log(this.informacion);
          this.router.navigate(['/login']);
        });
      }).catch((err) => {
        console.log(err);
      });
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
