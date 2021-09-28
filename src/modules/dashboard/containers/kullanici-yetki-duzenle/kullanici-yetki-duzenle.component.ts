import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AspUserData } from 'src/modules/data/aspuser.data';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-kullanici-yetki-duzenle',
  templateUrl: './kullanici-yetki-duzenle.component.html',
  styleUrls: ['./kullanici-yetki-duzenle.component.scss'],
  providers: [AuthService]
})
export class KullaniciYetkiDuzenleComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  user: AspUserData | undefined;
  result:AspUserData[]=[];
  selectedUserType: any;
  result2: any = {};
  error: any;
  yetkiTip =[
    { id: 1, name: "Normal Kullanıcı" },
    { id: 2, name: "Admin" },
    { id: 3, name: "Süper Admin" }
  ];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.authService.getAspUserRoleById(params["id"]).subscribe(data => {
        //this.user = data;
        this.result2 = data;
        data = this.result2.data;
        this.user =data; 
        console.log("data=> "+JSON.stringify(data));
        console.log("data=> "+JSON.stringify(data));
        console.log("this.user => "+JSON.stringify(this.user));
      }, error => this.error = error)
    });
  }

  onChangeUserType(selectedUserType:any)
  {
    this.selectedUserType = selectedUserType;
  }

  updateUser() {

    const userInformation = {
      id: this.user?.id,
      createdAt: ""
    };
    
  }


}
