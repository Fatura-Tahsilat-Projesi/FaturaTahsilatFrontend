import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreditCardData } from 'src/modules/data/creditcarddata';
import { CountryService } from 'src/modules/tables/services';
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
  userIdValue :string | any;
  responseUserId: string | any;
  searchActive = false;
  responsePaymentAccount: any = {};
  constructor(
    private http:HttpClient,
    private router:Router,
    private creditCardService:CreditCardService,
    private alertify: AlertifyService,
    public countryService: CountryService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.userIdValue = localStorage.getItem("id");
    this.creditCardService.getAllUserCards(this.userIdValue).subscribe(data => {
      this.result = data;
      console.log("data => "+JSON.stringify(data));
      this.responsePaymentAccount = data;
      
      data = this.responsePaymentAccount.data;
      this.responseUserId = this.responsePaymentAccount.userId;
      console.log("responseuserId => "+this.responseUserId);
      //console.log(this.result);
    }, error => this.error = error)
  }
  data: any = {};

  deleteCreditCard(id: any)
  {
    let resp;
    resp = this.creditCardService.deleteCreditCard(id).subscribe(data =>
      this.router.navigate(['dashboard/hesapbilgilerim']) 
    );
    this.data = resp;
    resp = this.data;
    var circularReference = {otherData: 123};
    //circularReference.myself = circularReference;

    /*const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key: any, value: object | null) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };
    
    console.log("response d??nen cevap => "+ JSON.stringify(resp, getCircularReplacer()));*/
  
    //console.log("response d??nen cevap => "+ resp);
    if(resp){
      this.alertify.success(id + "numaral?? kredi kart?? ba??ar??yla silinmi??tir!");
    } else {
      this.alertify.warning("Kredi Kart?? silinemedi! Hata Olu??tu!");
    }
    //window.location.reload();
  }


}
