import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceActivitiesData } from 'src/modules/data/invoiceActivitiesData';
import { InvoiceAndActivitiesData } from 'src/modules/data/InvoiceAndActivitiesData';
import { InvoiceData } from 'src/modules/data/invoiceData';
import { ServisGelenVeriler } from 'src/modules/data/ServisGelenVeriler';
import { FaturaService } from 'src/services/fatura.service';

@Component({
  selector: 'app-fatura-hareketleri',
  templateUrl: './fatura-hareketleri.component.html',
  styleUrls: ['./fatura-hareketleri.component.scss'],
  providers: [FaturaService]
})
export class FaturaHareketleriComponent implements OnInit {


  error: any;
  searchActive = false;
  tmp: string | any;
  idInfo: number | any;
  selectedType: any;
  deger: any;
  selectedCategory: any;
  selectedStatusCode: any;
  selectedPaymentStatus: any;
  readonly inputElement: HTMLInputElement | undefined;
  fatura: InvoiceAndActivitiesData | any;
  //result: InvoiceActivitiesData[]=[];
  constructor(
    private faturaService: FaturaService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.faturaService.getWithInvoiceActivitiesById(params["id"]).subscribe(data => {
        console.log("id => " + params["id"]);
        this.fatura = data?.invoiceActivities;
        console.log("data => " + data);
        //this.fatura.name = data?.name;
        //this.fatura.tutar = data?.tutar;
        //this.fatura.categoryId = data?.categoryId;
        // this.categoryIdVariable = data?.invoiceType;
        // this.dateIdVariable = data?.dueDate;
        // this.selectedCompany = data?.companyId;
        // this.onChange(this.categoryIdVariable);
        // this.onChangeCompany(this.selectedCompany);
        // this.onChangeDate(this.dateIdVariable);
        //this.fatura.kdvsizTutar = data?.kdvsizTutar;
        //console.log(this.fatura.name);
        //console.log(this.fatura.tutar);

      })
    });
    //this.result = this.fatura;
  }


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
