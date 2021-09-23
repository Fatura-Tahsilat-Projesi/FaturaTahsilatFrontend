import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InvoiceActivitiesData } from 'src/modules/data/invoiceActivitiesData';
import { InvoiceActivitiesService } from 'src/services/invoiceActivities.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FaturaModel } from 'src/models/faturamodel';

@Component({
  selector: 'app-fatura-hareket',
  templateUrl: './fatura-hareket.component.html',
  styleUrls: ['./fatura-hareket.component.scss'],
  providers: [InvoiceActivitiesService]

})
export class FaturaHareketComponent implements OnInit {

  error: any;
  searchActive = false;
  faturaDetay: FaturaModel | undefined;
  tmp: string | any;
  idInfo: number | any;
  selectedType: any;
  deger: any;
  selectedCategory: any;
  selectedStatusCode: any;
  selectedPaymentStatus: any;
  readonly inputElement: HTMLInputElement | undefined;

  constructor(
    private http:HttpClient,
    private invoiceActivitiesService:InvoiceActivitiesService,
    private modalService: NgbModal) { 
    
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

  odemeBilgisi = [
    { id: 0, name: "Ödenmedi"},
    { id: 1, name: "Ödendi"},
    { id: 2, name: "Beklemede"},
    { id: 3, name: "Ertelendi"}
  ];


  onChangeStatusCode(id:any) {
    if(id >=0 && id <=3) {
      this.selectedStatusCode = this.odemeBilgisi[id].name;
    } else {
      this.selectedStatusCode = "Hata!";
    }
  }


  openDetails(targetModal: any, fatura: InvoiceActivitiesData) {
    this.modalService.open(targetModal, {
      size: 'lg', 
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      backdrop: 'static'
    });
    document.getElementById('invoiceId')?.setAttribute('value', <any>fatura.invoiceId);
    document.getElementById('userId')?.setAttribute('value', <any>fatura.userId);
    document.getElementById('companyId')?.setAttribute('value', <any>fatura.companyId);
    document.getElementById('dateOfBirth')?.setAttribute('value', <any>fatura.transactionDate);
    document.getElementById('statusCode')?.setAttribute('value', <any>fatura.statusCode);

    this.onChangeStatusCode(fatura.statusCode);
 }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
