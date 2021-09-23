import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCardData } from 'src/modules/data/creditcarddata';
import { AlertifyService } from 'src/services/alertify.service';
import { CreditCardService } from 'src/services/creditcard.service';

@Component({
  selector: 'app-payment-account-information',
  templateUrl: './payment-account-information.component.html',
  styleUrls: ['./payment-account-information.component.scss'],
  providers: [CreditCardService,AlertifyService]
})
export class PaymentAccountInformationComponent implements OnInit {

  result:CreditCardData[]=[];
  error: any;
  searchActive = false;
  constructor(
    private http:HttpClient,
    private router:Router,
    private creditCardService:CreditCardService,
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
    this.creditCardService.getAllCards().subscribe(data => {
      this.result = data;
      //console.log(this.result);
    }, error => this.error = error)
  }

  deleteCreditCard(id: any)
  {
    let resp;
    resp = this.creditCardService.deleteCreditCard(id).subscribe(data =>
      this.router.navigate(['dashboard/hesapbilgilerim']) 
    );
    console.log("response dönen cevap => "+ resp);
    if(resp){
      this.alertify.success(id + "numaralı kredi kartı başarıyla silinmiştir!");
    } else {
      this.alertify.warning("Kredi Kartı silinemedi! Hata Oluştu!");
    }
    //window.location.reload();
  }


}
