import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaturaModel } from 'src/models/faturamodel';
import { InvoiceData } from 'src/modules/data/invoiceData';
import { AlertifyService } from 'src/services/alertify.service';
import { FaturaService } from 'src/services/fatura.service';

@Component({
  selector: 'app-fatura-ode',
  templateUrl: './fatura-ode.component.html',
  styleUrls: ['./fatura-ode.component.scss'],
  providers: [FaturaService]
})
export class FaturaOdeComponent implements OnInit {
  error: any;
  faturaDetay: InvoiceData | undefined;
  constructor(
    private http:HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertify: AlertifyService,
    private faturaService: FaturaService,
    private router: Router
  ) { }

  result:InvoiceData[]=[];
  ngOnInit(): void {
    this.faturaService.getFatura().subscribe(data =>{
      this.result = data;
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

  verileriGetir(id: any)
  {
    this.faturaService.getFaturaById(id).subscribe(data => {
      this.faturaDetay = data;
      console.log(data);
    })
  }

  successPayment(id:any)
  {
    //console.log("id => "+id);
   
    //const successCode=1;
    //this.faturaDetay?.statusCode = successCode;
    const faturaBilgileri = {
      invoiceId: this.faturaDetay?.invoiceId,
      invoiceNu:  this.faturaDetay?.invoiceNu,
      //Math.floor(Math.random() * (99999999999 -  10000000000)) + 10000000000;
      name:  this.faturaDetay?.name,
      total: this.faturaDetay?.total,
      totalVat:  this.faturaDetay?.totalVat,
      excludingVat:  this.faturaDetay?.excludingVat,
      dueDate:  this.faturaDetay?.dueDate,
      isComplete:  1,
      invoiceType: this.faturaDetay?.invoiceType,
      statusCode:  1,
      companyId:  this.faturaDetay?.companyId,
      userId:  this.faturaDetay?.userId
      };

    this.faturaService.updateInvoice(faturaBilgileri).subscribe(data => 
      this.router.navigate(['dashboard/faturalar'])  
    );
  }

  failPayment(id:any)
  {
    
  }

  provisionPayment(id:any)
  {
    
  }

}
