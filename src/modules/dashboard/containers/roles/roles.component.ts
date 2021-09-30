import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RolesData } from 'src/modules/data/roles.data';
import { CountryService } from 'src/modules/tables/services';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor(
    private authService:AuthService,
    public countryService: CountryService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }
  error: any;
  searchActive = false;
  result: RolesData[]=[];
  result2: any = {};

  ngOnInit(): void {
    this.authService.getRoles().subscribe(data => {
      this.result2 = data;
      data = this.result2.data;
      this.result = data;
      console.log("data => "+JSON.stringify(data));
    },error => this.error = error);
  }


  openDetails(targetModal: any, user: RolesData) {
    
 }


  deleteRole(id: any)
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
