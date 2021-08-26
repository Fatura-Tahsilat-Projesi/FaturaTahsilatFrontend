import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InvoiceActivitiesData } from 'src/modules/data/invoiceActivitiesData';
import { InvoiceActivitiesService } from 'src/services/invoiceActivities.service';
@Component({
  selector: 'app-fatura-hareket',
  templateUrl: './fatura-hareket.component.html',
  styleUrls: ['./fatura-hareket.component.scss'],
  providers: [InvoiceActivitiesService]

})
export class FaturaHareketComponent implements OnInit {

  error: any;


  constructor(
    private http:HttpClient,
    private invoiceActivitiesService:InvoiceActivitiesService) { 
    
  }
  result:InvoiceActivitiesData[]=[];
  ngOnInit(): void {
    this.invoiceActivitiesService.getInvoiceActivities().subscribe(data =>{
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



}
