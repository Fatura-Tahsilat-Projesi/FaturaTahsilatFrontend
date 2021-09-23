import { Component, OnInit } from '@angular/core';
import { AspUserData } from 'src/modules/data/aspuser.data';
import { AlertifyService } from 'src/services/alertify.service';
import { AspUserService } from 'src/services/aspuser.service';

@Component({
  selector: 'app-tum-kullanicilar-asp',
  templateUrl: './tum-kullanicilar-asp.component.html',
  styleUrls: ['./tum-kullanicilar-asp.component.scss'],
  providers: [AspUserService,AlertifyService]
})
export class TumKullanicilarAspComponent implements OnInit {

  error: any;
  searchActive = false;
  result:AspUserData[]=[];
  constructor(
    private aspUserService:AspUserService,
    private alertify:AlertifyService
  ) { }

  ngOnInit(): void {
    this.aspUserService.getAllUser().subscribe(data => {
      this.result = data;
    }, error => this.error = error);
  }

  deleteUser(id: any)
  {
    // let resp;
    // resp = this.aspUserService.deleteUser(id).subscribe(data =>
    //   this.router.navigate(['dashboard/kullanicilar']) 
    // );
    // console.log("response dönen cevap => "+ resp);
    // if(resp){
    //   this.alertify.success(id + "numaralı kullanıcı başarıyla silinmiştir!");
    // } else {
    //   this.alertify.warning("Kullanıcı silinemedi! Hata Oluştu!");
    // }
    // //window.location.reload();
  }


}
