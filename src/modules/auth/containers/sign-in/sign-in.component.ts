import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/models/AuthResponse';
import { AspUserData } from 'src/modules/data/aspuser.data';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';
import { NavigationService } from '../../../navigation/services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [AuthService]
})
export class SignInComponent implements OnInit {

  public email: string | any;
  public password: string | any;
  public errorMessage: string | any;
  loading: boolean = false;
  data: any = {};
  resultAspUser: AspUserData | undefined;
  aspUsername: string="username";
  responseAspUser: any = {};
  constructor(
    private router: Router,
    private authService: AuthService,
    private alertify: AlertifyService ) { }

  ngOnInit(): void {
  }
  
  

  login(form: NgForm) {
    //console.log("info => " + form);
    this.loading = true;
    let authResponse: Observable<AuthResponse>;
    if (form.valid) {
      // this.authService.authenticate(this.email, this.password)
      // .subscribe(response => {
      //   if(response) {
      //     this.router.navigateByUrl('/dashboard');
      //   }
      //   this.errorMessage = 'E-posta Adresiniz veya Parolanız Hatalı!';
      // })
      authResponse = this.authService.signIn(this.email, this.password);
      authResponse.subscribe(response => {
        //console.log("sI Response => "+response);
        this.data = response;
        response = this.data.data;
        
        var id: string | null = localStorage.getItem('id');
        this.authService.getAspUserById(id).subscribe(data => {
        this.responseAspUser = data;
        data = this.responseAspUser.data;
        this.aspUsername = <any> data.userName;
        console.log("aspUsername => "+this.aspUsername);
        localStorage.setItem('username',this.aspUsername);
        });
        //response = response.data.data;
        //console.log(JSON.stringify(this.data));
        //console.log("response/");
        //console.log(JSON.stringify(response));
        //console.log("response- ");

        //console.log(this.data.data.accessToken);
        //console.log(this.authService.getToken());
        this.loading = false;
        this.router.navigate(['/dashboard']);
      }, err => {
        this.errorMessage = err;
        //console.log("err=>"+err);
        this.loading = false;
      })
    } else {
      this.loading = false;
      this.errorMessage = 'Lütfen Bilgileri Eksiksiz Olarak Giriniz!';
    }
    form.reset();
  }

  

  // signIn(email:"any", password:"any") {
  //   authResponse = this.authService.signIn(email, password);
  // }

  // authResponse.subscribe(response => {
  //   console.log();
  // })

}
