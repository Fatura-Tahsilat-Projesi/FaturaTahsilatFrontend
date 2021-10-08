import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyData } from 'src/modules/data/companyData';
import { InvoiceData } from 'src/modules/data/invoiceData';
import { AlertifyService } from 'src/services/alertify.service';
import { CompanyService } from 'src/services/company.service';
import { FaturaService } from 'src/services/fatura.service';

@Component({
  selector: 'app-firma-tum-faturalar',
  templateUrl: './firma-tum-faturalar.component.html',
  styleUrls: ['./firma-tum-faturalar.component.scss'],
  providers: [FaturaService,CompanyService,AlertifyService]
})
export class FirmaTumFaturalarComponent implements OnInit {

  error: any;
  selectedCategory: any;
  selectedStatusCode: any;
  selectedPaymentStatus: any;
  selectedCompany: any;
  searchActive = false;
  constructor(
    private http:HttpClient,
    private alertify: AlertifyService,
    private faturaService: FaturaService,
    private modalService: NgbModal,
    private companyService: CompanyService,
    private router: Router
  ) { }
  
  result:InvoiceData[]=[];
  companyResult: CompanyData | undefined;
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


  ngOnInit(): void {
    var id: string | null = localStorage.getItem('id');
    this.faturaService.getAllUserInvoice(<any>id).subscribe(data => {
      this.result = data;
      console.log("data => "+JSON.stringify(data));
    }, error => this.error = error);
  }


  deleteInvoice(id: any) {
    let resp;
    resp = this.faturaService.deleteInvoice(id).subscribe(data => {
      console.log(data);
      resp = data;
    });
    console.log("response dönen cevap => "+ resp);
    if(resp){
      this.alertify.success(id + "numaralı fatura başarıyla silinmiştir!");
    } else {
      this.alertify.warning("Fatura silinemedi! Hata Oluştu!");
    }
  }

  onChangeCategory(categoryIdVariable:any) {
    this.selectedCategory = this.faturaTip[categoryIdVariable].name;
  }
  onChangeCompany(companyIdVariable:any) {
    var tmp:any = {};
    this.companyService.getCompanyById(companyIdVariable).subscribe(data => {
      this.selectedCompany = data.name;
    });
    //console.log("firma ismi => "+this.selectedCompany);
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
    document.getElementById('companyType')?.setAttribute('value', <any>fatura.companyId);
    document.getElementById('dueDate')?.setAttribute('value', <any>fatura.dueDate);
    document.getElementById('isComplete')?.setAttribute('value', <any>fatura.isComplete);
    document.getElementById('statusCode')?.setAttribute('value', <any>fatura.statusCode);
    document.getElementById('dateOfBirth')?.setAttribute('value', <any>fatura.dueDate);

    document.getElementById('invoiceType2')?.setAttribute('value', <any>fatura.invoiceType);
    this.onChangeCategory(fatura.invoiceType);
    this.onChangeCompany(fatura.companyId);
    this.onChangeStatusCode(fatura.statusCode);
    this.onChangePaymentStatus(fatura.isComplete);
    // document.getElementById('lname').setAttribute('value', fatura.lastname);
    // document.getElementById('dept').setAttribute('value', fatura.department);
    // document.getElementById('email2').setAttribute('value', fatura.email);
    // document.getElementById('cntry').setAttribute('value', fatura.country);
 }


}
