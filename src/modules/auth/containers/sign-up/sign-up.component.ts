import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/models/AuthResponse';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [AuthService, AlertifyService]
})
export class SignUpComponent implements OnInit {

  loading: boolean = false;
  public username: string | any;
  public email: string | any;
  public password: string | any;
  public errorMessage: string | any;
  statusCode: number | any;
  constructor(
    private http:HttpClient,
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
  }

  createUser(ad:any, soyad:any, email:any, password:any, password2:any) {
    if(password.value === password2.value)
    {
      const userInformation = {
        username: ad.value + soyad.value,
        email: email.value,
        password: password.value
      };
      console.log(userInformation);

      this.authService.createUser(userInformation).subscribe(data => {
        this.statusCode = data?.statusCode;
        console.log("statuscode => "+data?.statusCode);
        console.log("this => "+this.statusCode);
        if(this.statusCode == 200) {
        this.alertify.warning("Başarılı şekilde kayıt oldunuz!");
        }
        this.router.navigate(['/dashboard'])
      });
      
    }
    else {
      this.alertify.warning("Parola ve Parola Tekrarı Aynı Değil!");
    }

    
  }


  signUp(form: NgForm) {
    console.log("info => " + form);
    this.loading = true;
    let authResponse: Observable<AuthResponse>;
    if (form.valid) {
      authResponse = this.authService.signUp(this.username, this.email, this.password)

      authResponse.subscribe(response => {
        this.loading = false;
        this.router.navigate(['/auth/login']);
      }, err => {
        this.errorMessage = err;
        this.loading = false;
      })
    }
    else {
      this.loading = false;
      this.errorMessage = 'Lütfen Bilgileri Eksiksiz Olarak Giriniz!';
    }
    

    
  }



}
