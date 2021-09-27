import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaturaModel } from 'src/models/faturamodel';
import { CreditCardData } from 'src/modules/data/creditcarddata';
import { InvoiceData } from 'src/modules/data/invoiceData';
import { ServisGelenVeriler } from 'src/modules/data/ServisGelenVeriler';
import { AlertifyService } from 'src/services/alertify.service';
import { CreditCardService } from 'src/services/creditcard.service';
import { FaturaService } from 'src/services/fatura.service';

@Component({
  selector: 'app-fatura-ode',
  templateUrl: './fatura-ode.component.html',
  styleUrls: ['./fatura-ode.component.scss'],
  providers: [FaturaService,CreditCardService]
})
export class FaturaOdeComponent implements OnInit {
  error: any;
  faturaDetay: InvoiceData | undefined;
  kartDetay: CreditCardData | undefined;
  paymentType: number | any;
  //selectedPaymentType: number | any;
  selectPaymentType: number | any;
  countries = [
    {id: 1, name: "Fast"},
    {id: 2, name: "Eft"},
    {id: 3, name: "Havale"},
    {id: 4, name: "Mobil"},
    {id: 5, name: "Kredi Kartı"}
 ];
  constructor(
    private http:HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertify: AlertifyService,
    private faturaService: FaturaService,
    private router: Router,
    private creditCardService: CreditCardService
  ) { }

  result:InvoiceData[]=[];
  resultCreditCard:CreditCardData[]=[];
  fatura: ServisGelenVeriler | undefined;

  ngOnInit(): void {
    this.faturaService.getFatura().subscribe(data =>{
      this.result = data;
    }, error => this.error = error);
    this.creditCardService.getAllCards().subscribe(data =>{
      this.resultCreditCard = data;
    }, error => this.error = error);
  }

  faturaTip =[
    { id: 1, name: "Elektrik" },
    { id: 2, name: "Su" },
    { id: 3, name: "Doğalgaz" },
    { id: 4, name: "İnternet" },
    { id: 5, name: "Mobil" },
    { id: 6, name: "Tv Yayın" }
  ];

  onChange(selectPaymentType:any) {
    //console.log(categoryIdVariable);
    this.selectPaymentType = selectPaymentType;
  }


  verileriGetir(id: any)
  {
    this.faturaService.getFaturaById(id).subscribe(data => {
      this.faturaDetay = data;
      console.log(data);
    })
  }

  kartverileriniGetir(id: any)
  {
    this.creditCardService.getCreditCardById(id).subscribe(data => {
      this.kartDetay = data;
      console.log("kartlar => "+data);
    })
  }



  successPayment(id:any)
  {
    //console.log("id => "+id);
   
    //const successCode=1;
    //this.faturaDetay?.statusCode = successCode;

    // this.faturaService.getFaturaById(id).subscribe( data => {
    //   this.fatura = data;
    //   console.log("odeme oncesi data => "+data);
    // });
    //this.fatura = <any>this.verileriGetir(id);
    this.fatura =<any>this.result[id];
    console.log("this.fatura => "+this.fatura);
    if(this.fatura?.invoiceId == null || this.fatura?.invoiceId == undefined) {
      console.log("else girildi, null!");
      this.alertify.error("Fatura Verileri Getirilemedi!");
    } else {
    console.log("if girildi, null değil => "+this.faturaDetay);

    
    const faturaBilgileri = {
      invoiceId: this.fatura?.invoiceId,
      invoiceNu:  this.fatura?.invoiceNu,
      //Math.floor(Math.random() * (99999999999 -  10000000000)) + 10000000000;
      name:  this.fatura?.name,
      total: this.fatura?.total,
      totalVat:  this.fatura?.totalVat,
      excludingVat:  this.fatura?.excludingVat,
      dueDate:  this.fatura?.dueDate,
      isComplete:  1,
      invoiceType: this.fatura?.invoiceType,
      statusCode:  1,
      companyId:  this.fatura?.companyId,
      userId:  this.fatura?.userId
      };

      this.faturaService.updateInvoice(faturaBilgileri).subscribe(data => 
        this.router.navigate(['dashboard/faturalar'])  
      );
      this.alertify.success("Ödeme Talebiniz Alındı!");
  }
  }

  failPayment(id:any)
  {
    
  }

  provisionPayment(id:any)
  {
    
  }

}
