import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCardService } from 'src/services/creditcard.service';

@Component({
  selector: 'app-new-credit-card',
  templateUrl: './new-credit-card.component.html',
  styleUrls: ['./new-credit-card.component.scss'],
  providers: [CreditCardService]
})
export class NewCreditCardComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
    private creditCardService:CreditCardService
  ) { }

  ngOnInit(): void {
  }

  faturaTip =[
    { id: 1, name: "Elektrik" },
    { id: 2, name: "Su" },
    { id: 3, name: "Doğalgaz" },
    { id: 4, name: "İnternet" },
    { id: 5, name: "Mobil" },
    { id: 6, name: "Tv Yayın" }
  ];
  aylar =[
    { id: 1, name: "Ocak" },
    { id: 2, name: "Şubat" },
    { id: 3, name: "Mart" },
    { id: 4, name: "Nisan" },
    { id: 5, name: "Mayıs" },
    { id: 6, name: "Haziran" },
    { id: 7, name: "Temmuz" },
    { id: 8, name: "Ağustos" },
    { id: 9, name: "Eylül" },
    { id: 10, name: "Ekim" },
    { id: 11, name: "Kasım" },
    { id: 12, name: "Aralık" },

  ];

  createCreditCard(CardNumber: any, ExpMonth:any, ExpYear:any, cvc2:any) {

    var today = new Date();
    var balanceValue = 200;
    const userId = <any>localStorage.getItem('id');
    const creditCardInformation = {
      cardNumber: CardNumber.value,
      ExpMonth: parseInt(ExpMonth.value),
      ExpYear: parseInt(ExpYear.value),
      cvc2: parseInt(cvc2.value),
      UserId: userId,
      CreatedAt: today,
      Balance: balanceValue
    };
    this.creditCardService.createCreditCard(creditCardInformation).subscribe(data =>
      this.router.navigate(['dashboard/hesapbilgilerim'])
    );
    /*this.companyService.createCompany(companyInformation).subscribe(data => 
      this.router.navigate(['dashboard/firmalar'])  
    );*/
  }



}
