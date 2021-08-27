import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { AlertifyService } from 'src/services/alertify.service';
import { UserModel } from 'src/models/usermodel';
import { UserData } from 'src/modules/data/userData';

@Component({
  selector: 'app-tum-kullanicilar',
  templateUrl: './tum-kullanicilar.component.html',
  styleUrls: ['./tum-kullanicilar.component.scss'],
  providers: [UserService]
})
export class TumKullanicilarComponent implements OnInit {

  error: any;
  searchActive = false;

  constructor(
    private http:HttpClient,
    private userService:UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertify: AlertifyService
  ) { }

  result:UserData[]=[];
  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      this.result = data;
    }, error => this.error = error)
  }


  deleteUser(id: any)
  {
    let resp;
    resp = this.userService.deleteUser(id).subscribe(data =>
      this.router.navigate(['dashboard/kullanicilar']) 
    );
    console.log("response dönen cevap => "+ resp);
    if(resp){
      this.alertify.success(id + "numaralı kullanıcı başarıyla silinmiştir!");
    } else {
      this.alertify.warning("Kullanıcı silinemedi! Hata Oluştu!");
    }
    //window.location.reload();
  }


}
