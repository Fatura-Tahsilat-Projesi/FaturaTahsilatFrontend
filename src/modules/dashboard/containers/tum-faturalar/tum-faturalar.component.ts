import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaturaModel } from 'src/models/faturamodel';
import { InvoiceData } from 'src/modules/data/invoiceData';
import { AlertifyService } from 'src/services/alertify.service';
import { FaturaService } from 'src/services/fatura.service';

@Component({
  selector: 'app-tum-faturalar',
  templateUrl: './tum-faturalar.component.html',
  styleUrls: ['./tum-faturalar.component.scss'],
  providers: [FaturaService]
})

export class TumFaturalarComponent implements OnInit {
  
  error: any;
  searchActive = false;
  constructor(
    private http:HttpClient,
    private alertify: AlertifyService,
    private faturaService: FaturaService,
    private router: Router
  ) { }

  result:InvoiceData[]=[];
  ngOnInit(): void {
    this.faturaService.getFatura().subscribe(data => {
      this.result = data;
    }, error => this.error = error)
  }

  faturaTip =[
    { id: 1, name: "Elektrik" },
    { id: 2, name: "Su" },
    { id: 3, name: "Doğalgaz" },
    { id: 4, name: "İnternet" },
    { id: 5, name: "Mobil" },
    { id: 6, name: "Tv Yayın" }
  ];

  odemeBilgisi = [
    { id: 0, name: "Ödenmedi"},
    { id: 1, name: "Ödendi"},
    { id: 2, name: "Beklemede"}
  ];


  deleteInvoice(id: any) {
    let resp;
    resp = this.faturaService.deleteInvoice(id).subscribe(data => {
      console.log(data);
      resp = data;
    });
    console.log("response dönen cevap => "+ resp);
    if(resp ){
      this.alertify.success(id + "numaralı fatura başarıyla silinmiştir!");
    } else {
      this.alertify.warning("Fatura silinemedi! Hata Oluştu!");
    }
  }

  onChange(categoryIdVariable:any) {
    //console.log(categoryIdVariable);
    
    //this.selectedType = result2?.invoiceId;
    //this.deger = id;
  }

}
