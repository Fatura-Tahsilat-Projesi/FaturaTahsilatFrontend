import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AspUserData } from 'src/modules/data/aspuser.data';
import { CountryService } from 'src/modules/tables/services';
import { AlertifyService } from 'src/services/alertify.service';
import { AspUserService } from 'src/services/aspuser.service';
import { AuthService } from 'src/services/auth.service';

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
  //result2:AspUserData[]=[];
  result2: any = {};
  constructor(
    private aspUserService:AspUserService,
    private authService:AuthService,
    private alertify:AlertifyService,
    private modalService: NgbModal,
    private router:Router,
    public countryService: CountryService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.aspUserService.getAllUser().subscribe(data => {
      this.result2 = data;
      data = this.result2.data;
      this.result = data;
      //this.result2 = this.result[data.length];
      //this.result2 = data.length
    }, error => this.error = error);
  }


  openDetails(targetModal: any, user: AspUserData) {
    this.modalService.open(targetModal, {
      size: 'lg', 
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      backdrop: 'static'
    });
    document.getElementById('userName')?.setAttribute('value', <any>user.userName);
    document.getElementById('email')?.setAttribute('value', <any>user.email);
    if(user.emailConfirmed){
      document.getElementById('emailConfirmed')?.setAttribute('value', "OnaylandÄ±");
    } else {
      document.getElementById('emailConfirmed')?.setAttribute('value', "OnaylanmadÄ±");
    }
    if(user.phoneNumberConfirmed){
      document.getElementById('phoneConfirmed')?.setAttribute('value', "OnaylandÄ±");
    } else {
      document.getElementById('phoneConfirmed')?.setAttribute('value', "OnaylanmadÄ±");
    }
    if(user.twoFactorEnabled){
      document.getElementById('twoFactorEnabled')?.setAttribute('value', "EtkinleÅtirildi");
    } else {
      document.getElementById('twoFactorEnabled')?.setAttribute('value', "EtkinleÅtirilmedi");
    }
    if(user.lockoutEnabled){
      document.getElementById('lockoutEnabled')?.setAttribute('value', "Kilitlendi");
    } else {
      document.getElementById('lockoutEnabled')?.setAttribute('value', "Kilitlenmedi");
    }
    if(user.phoneNumber)
    {
      document.getElementById('phoneNumber')?.setAttribute('value', <any>user.phoneNumber);
    } else {
      document.getElementById('phoneNumber')?.setAttribute('value', "Telefon Bilgisi GirilmemiÅ");
    }
    if(user.city)
    {
      document.getElementById('city')?.setAttribute('value', <any>user.city);
    } else {
      document.getElementById('city')?.setAttribute('value', "Åehir Bilgisi GirilmemiÅ");
    }
    document.getElementById('userId')?.setAttribute('value', <any>user.id);
    document.getElementById('invoiceType')?.setAttribute('value', <any>user.phoneNumber);
    document.getElementById('dueDate')?.setAttribute('value', <any>user.rolName);
    document.getElementById('accessFailedCount')?.setAttribute('value', <any>user.accessFailedCount);


    // this.onChangeCategory(user.invoiceType);
    // this.onChangeStatusCode(user.statusCode);
    // this.onChangePaymentStatus(user.isComplete);

    // document.getElementById('lname').setAttribute('value', user.lastname);
    // document.getElementById('dept').setAttribute('value', user.department);
    // document.getElementById('email2').setAttribute('value', user.email);
    // document.getElementById('cntry').setAttribute('value', user.country);
 }


  deleteUser(id: any)
  {
    let resp;
    resp = this.authService.deleteUser(id).subscribe(data => {
      console.log("kullanÄ±cÄ± silme => "+data);
      resp = data;
    });
    //console.log("response dÃ¶nen cevap => "+ resp);
    if(resp){
      this.alertify.success(id + "numaralÄ± kullanÄ±cÄ± baÅarÄ±yla silinmiÅtir!");
    } else {
      this.alertify.warning("KullanÄ±cÄ± silinemedi! Hata OluÅtu!");
    }
    this.router.navigate(['/dashboard/kullanicilar']);
  }


}
