import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicio/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private email: string;
  private password: string;
  constructor(
    public authService: AuthService,
    private router: Router
  ) {

  }
  ngOnInit() {
  }

  onSubmitAddUser() {
    console.log('estoy aqui');
    this.authService.loginEmail(this.email, this.password)
      .then((res) => {
        AuthService.inicio = true;
        AuthService.salir = false;
        this.router.navigate(['home']);
      }).catch((err) => {
        console.log(err);
      });
  }
  registro() {
    this.router.navigate(['form-person']);
  }

}
