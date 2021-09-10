import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaturaModel } from 'src/models/faturamodel';
import { InvoiceData } from 'src/modules/data/invoiceData';
import { ServisGelenVeriler } from 'src/modules/data/ServisGelenVeriler';
import { AlertifyService } from 'src/services/alertify.service';
import { FaturaService } from 'src/services/fatura.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-tum-faturalar',
  templateUrl: './tum-faturalar.component.html',
  styleUrls: ['./tum-faturalar.component.scss'],
  providers: [FaturaService]
})

export class TumFaturalarComponent implements OnInit {
  
  error: any;
  selectedCategory: any;
  selectedStatusCode: any;
  selectedPaymentStatus: any;
  searchActive = false;
  constructor(
    private http:HttpClient,
    private alertify: AlertifyService,
    private faturaService: FaturaService,
    private modalService: NgbModal,
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

  onChangeCategory(categoryIdVariable:any) {
    this.selectedCategory = this.faturaTip[categoryIdVariable].name;
  }
  onChangeStatusCode(id:any) {
    this.selectedStatusCode = this.odemeBilgisi[id].name;
  }
  onChangePaymentStatus(id:any) {
    this.selectedPaymentStatus = this.odemeBilgisi[id].name;
  }

  openDetails(targetModal: any, fatura: InvoiceData) {
    this.modalService.open(targetModal, {
      size: 'lg', 
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      backdrop: 'static'
    });
    document.getElementById('name')?.setAttribute('value', <any>fatura.name);
    document.getElementById('total')?.setAttribute('value', <any>fatura.total);
    document.getElementById('totalVat')?.setAttribute('value', <any>fatura.totalVat);
    document.getElementById('excludingVat')?.setAttribute('value', <any>fatura.excludingVat);
    document.getElementById('invoiceType')?.setAttribute('value', <any>fatura.invoiceType);
    document.getElementById('dueDate')?.setAttribute('value', <any>fatura.dueDate);
    document.getElementById('isComplete')?.setAttribute('value', <any>fatura.isComplete);
    document.getElementById('statusCode')?.setAttribute('value', <any>fatura.statusCode);
    document.getElementById('dateOfBirth')?.setAttribute('value', <any>fatura.dueDate);

    document.getElementById('invoiceType2')?.setAttribute('value', <any>fatura.invoiceType);
    this.onChangeCategory(fatura.invoiceType);
    this.onChangeStatusCode(fatura.statusCode);
    this.onChangePaymentStatus(fatura.isComplete);
    // document.getElementById('lname').setAttribute('value', fatura.lastname);
    // document.getElementById('dept').setAttribute('value', fatura.department);
    // document.getElementById('email2').setAttribute('value', fatura.email);
    // document.getElementById('cntry').setAttribute('value', fatura.country);
 }



}
