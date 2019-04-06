import { Component, OnInit } from '@angular/core';
import { FormPersonService } from '../servicio/form-person.service';
import { AuthService } from '../servicio/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.page.html',
  styleUrls: ['./form-person.page.scss'],
})
export class FormPersonPage implements OnInit {
  private informacion: any;
  public email: string;
  public password: string;
  constructor(public authService: FormPersonService,
    private router: Router,
    public auth: AuthService
  ) {
    this.CrearInformacionUsuario();
  }

  ngOnInit() {

  }

  CrearInformacionUsuario() {
    this.informacion = {
      nombre: '',
      apellido: '',
      genero: '',
      celular: '',
      edad: ''
    };
  }

  EnviarDatos() {
    this.auth.registeruser(this.email, this.password)
      .then((res) => {
        this.authService.creardatos(this.informacion).then((ress) => {
          this.router.navigate(['/home']);
        });
      }).catch((err) => {
        console.log(err);
      });
  }


}
