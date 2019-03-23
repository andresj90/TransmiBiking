import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicio/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService
  ) {

  }
  ngOnInit() {
  }

  onSubmitAddUser() {
    console.log('estoy aqui');
    this.authService.registeruser(this.email, this.password)
      .then((res) => {
        console.log('Bien');
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
  }
}
