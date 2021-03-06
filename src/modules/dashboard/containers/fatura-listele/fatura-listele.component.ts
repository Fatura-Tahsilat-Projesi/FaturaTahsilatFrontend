import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServisGelenVeriler} from '../../../data/ServisGelenVeriler';
import { FaturaOlusturService } from '../../../fatura-olustur.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FaturaModel } from 'src/models/faturamodel';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { FaturaService } from 'src/services/fatura.service';
import { Country } from 'src/modules/tables/models';
import { Observable } from 'rxjs';
import { CountryService } from 'src/modules/tables/services';
import { SBSortableHeaderDirective, SortEvent } from '../../../../modules/tables/directives';


@Component({
  selector: 'app-fatura-listele',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fatura-listele.component.html',
  styleUrls: ['./fatura-listele.component.scss'],
  providers: [FaturaOlusturService,FaturaService]
})

export class FaturaListeleComponent implements OnInit {
  
  @Input() pageSize = 4;

  searchActive = false;
  faturaDetay: FaturaModel | undefined;
  error: any;
  tmp: string | any;
  idInfo: number | any;
  selectedType: any;
  deger: any;
  selectedCategory: any;
  selectedStatusCode: any;
  selectedPaymentStatus: any;

  sortedColumn!: string;
  sortedDirection!: string;
  countries$!: Observable<ServisGelenVeriler[]>;
  total$!: Observable<number>;
  readonly inputElement: HTMLInputElement | undefined;
  constructor(
    private http:HttpClient,
    private faturaOlusturmaServisi:FaturaOlusturService,
    private modalService: NgbModal,
    private alertify: AlertifyService,
    private faturaService: FaturaService,
    private router: Router,
    public countryService: CountryService,
    private changeDetectorRef: ChangeDetectorRef) { }

  result:ServisGelenVeriler[]=[];
  @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;
  
  ngOnInit(): void {
    this.countryService.pageSize =<any> this.pageSize;
    this.countries$ =<any> this.countryService.countries$;
    this.total$ =<any> this.countryService.total$;

    var id: string | null = localStorage.getItem('id');
    /*this.faturaService.getFatura().subscribe(data =>{
      this.result = data;
      //this.selectedCompany = this.result[1].statusCode;
      //this.onChangeStatusCode(this.selectedCompany);
    }, error => this.error = error);*/
    this.faturaService.getAllUserInvoice(<any>id).subscribe(data => {
      this.result = data;
      console.log("data => "+JSON.stringify(data));
    }, error => this.error = error);
    
  }
  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this.countryService.sortColumn = column;
    this.countryService.sortDirection = direction;
    this.changeDetectorRef.detectChanges();
}
  // isEmptyObject(obj:any){
  //   console.log("obj => "+obj);
  //   for(var prop in obj) {
  //     if(obj.hasOwnProperty(prop)) {
  //       return false;
  //     }
  //   }
  //   console.log(JSON.stringify(obj));
  //   console.log(JSON.stringify({}));
  //   console.log("stringify => "+JSON.stringify(obj) === JSON.stringify({}));
  //   return JSON.stringify(obj) === JSON.stringify({});
  // }

  faturaTip =[
    { id: 1, name: "Elektrik" },
    { id: 2, name: "Su" },
    { id: 3, name: "Do??algaz" },
    { id: 4, name: "??nternet" },
    { id: 5, name: "Mobil" },
    { id: 6, name: "Tv Yay??n" }
  ];


  odemeBilgisi = [
    { id: 0, name: "??denmedi"},
    { id: 1, name: "??dendi"},
    { id: 2, name: "Beklemede"},
    { id: 3, name: "Ertelendi"}
  ];


  onChange(categoryIdVariable:any) {
    //console.log(categoryIdVariable);
    
    //this.selectedType = result2?.invoiceId;
    //this.deger = id;
  }

  onChangeCategory(categoryIdVariable:any) {
    //console.log("categoryIdVariable => " + categoryIdVariable);
    this.selectedCategory = this.faturaTip[categoryIdVariable-1].name;
    //console.log("this.selectedCategory => " + this.selectedCategory);
  }
  onChangeStatusCode(id:any) {
    this.selectedStatusCode = this.odemeBilgisi[id].name;
  }
  onChangePaymentStatus(id:any) {
    this.selectedPaymentStatus = this.odemeBilgisi[id].name;
  }

  
  faturaDetayGetir(id: any) {
    this.faturaOlusturmaServisi.faturaDetayGetir(id).subscribe(data => {
      this.faturaDetay = data;
      console.log(data);
    })
  }

  invoiceDelete(id: any) {
    this.faturaService.deleteInvoice(id).subscribe(data => 
      this.router.navigate(['dashboard/faturalarim'])  
    );
  }



  faturaSil(id: any) {
    // console.log(faturaAd.value);
    // console.log(tutar.value);
    // console.log(topkdv.value);
    // console.log(sontarih.value);
    // console.log(icerik.value);
    console.log("id => "+id);
      id: id
    console.log("id=> "+id);
    let resp;
    resp = this.faturaOlusturmaServisi.deleteFatura(id).subscribe(data => {
      console.log(data);
      resp = data;
    });
    console.log("response d??nen cevap => "+ resp);
    if(resp ){
      this.alertify.success(id + "numaral?? fatura ba??ar??yla silinmi??tir!");
    } else {
      this.alertify.warning("Fatura silinemedi! Hata Olu??tu!");
    }
  }
  
  closeResult = '';
  // open(content:any, id:any) {
  //   this.faturaDetayGetir(id);
  //   console.log("id => "+id);
  //   this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  openDetails(targetModal: any, fatura: ServisGelenVeriler) {
    this.modalService.open(targetModal, {
      size: 'lg', 
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      backdrop: 'static'
    });
    document.getElementById('name')?.setAttribute('value', fatura.name);
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
