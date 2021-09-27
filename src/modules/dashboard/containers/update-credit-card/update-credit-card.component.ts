import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCardData } from 'src/modules/data/creditcarddata';
import { CreditCardService } from 'src/services/creditcard.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-update-credit-card',
  templateUrl: './update-credit-card.component.html',
  styleUrls: ['./update-credit-card.component.scss'],
  providers: [CreditCardService]
})
export class UpdateCreditCardComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number; } | undefined;

  constructor(
    private creditCardService: CreditCardService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private calendar: NgbCalendar
  ) { }


    creditCard: CreditCardData | undefined;
    selectedExpMonth: any;
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
    /*TODO şuan için dahil etmedim, ileride dahil edilebilir. */
    kartTipi = [
      { id:1, name: "Kredi Kartı"},
      { id:1, name: "Banka Kartı"},
    ];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.creditCardService.getCreditCardById(params["id"]).subscribe(data => {
        this.creditCard = data;
        this.selectedExpMonth = data?.expMonth;
        console.log("data=> "+JSON.stringify(data));
      });
    })
  }


  onChangeExpMonth(selectedExpMonth:any)
  {
    this.selectedExpMonth = selectedExpMonth;
  }

  updateCreditCard(CardNumber:any, ExpMonth:any, ExpYear:any, cvc2:any) {
    
    //const userId = <any>localStorage.getItem('id');
    const creditCardInformation = {
      id: this.creditCard?.id,
      cardNumber: CardNumber.value,
      ExpMonth: ExpMonth.value,
      ExpYear: ExpYear.value,
      cvc2: cvc2.value,
      UserId: <any>this.creditCard?.userId,
      CreatedAt: this.creditCard?.createdAt,
      Balance: this.creditCard?.balance,
    };

    this.creditCardService.updateCreditCard(creditCardInformation).subscribe(data => 
      this.router.navigate(['dashboard/hesapbilgilerim'])  
    );
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }


}
