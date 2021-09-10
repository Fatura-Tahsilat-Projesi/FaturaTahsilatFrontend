import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from 'src/modules/data/userData';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-kullanici-duzenle',
  templateUrl: './kullanici-duzenle.component.html',
  styleUrls: ['./kullanici-duzenle.component.scss'],
  providers: [UserService]
})
export class KullaniciDuzenleComponent implements OnInit {

  user: UserData | undefined;
  selectedUserType: any;
  yetkiTip =[
    { id: 1, name: "Normal Kullanıcı" },
    { id: 2, name: "Admin" },
    { id: 3, name: "Süper Admin" }
  ];
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.userService.getUserById(params["id"]).subscribe(data => {
        this.user = data;
        this.selectedUserType = data?.authorization;
        console.log("data=> "+data);
        console.log("this.company=> "+this.user);
      })
    });
  }


  onChangeUserType(selectedUserType:any)
  {
    this.selectedUserType = selectedUserType;
  }

  updateUser(userName:any, name:any, surname:any, authorization:any, tcNu:any, address:any, phoneNu:any, mail:any, iban:any) {

    const userInformation = {
      id: this.user?.id,
      userName: userName.value,
      name: name.value,
      surname: surname.value,
      authorization: authorization.value,
      tcNu: tcNu.value,
      address: address.value,
      phoneNu: phoneNu.value,
      email: mail.value,
      iban: iban.value,
      createdAt: this.user?.createdAt
    };
    this.userService.updateUser(userInformation).subscribe(data => 
      this.router.navigate(['dashboard/kullanicilar'])  
    );
  }




}
