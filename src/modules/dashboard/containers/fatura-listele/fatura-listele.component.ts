import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServisGelenVeriler} from '../../../data/ServisGelenVeriler';
import { FaturaOlusturService } from '../../../fatura-olustur.service';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FaturaModel } from 'src/models/faturamodel';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { FaturaService } from 'src/services/fatura.service';

@Component({
  selector: 'app-fatura-listele',
  templateUrl: './fatura-listele.component.html',
  styleUrls: ['./fatura-listele.component.scss'],
  providers: [FaturaOlusturService,FaturaService]
})

export class FaturaListeleComponent implements OnInit {

  //faturaModel: FaturaModel;
  searchActive = false;
  faturaDetay: FaturaModel | undefined;
  error: any;
  tmp: string | any;
  idInfo: number | any;
  selectedType: any;
  deger: any;
  constructor(
    private http:HttpClient,
    private faturaOlusturmaServisi:FaturaOlusturService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private alertify: AlertifyService,
    private faturaService: FaturaService,
    private router: Router) { }

  result:ServisGelenVeriler[]=[];
  ngOnInit(): void {
    this.faturaService.getFatura().subscribe(data =>{
      this.result = data;
    }, error => this.error = error);
    
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

  function(id: any)
  {
    const result2 = this.faturaDetayGetir(id);
    //this.onChange(result2.invoiceId, id);
  }

  onChange(categoryIdVariable:any) {
    //console.log(categoryIdVariable);
    
    //this.selectedType = result2?.invoiceId;
    //this.deger = id;
  }

  getValues(){
    //Fonksiyon Servise Taşındı artık burada kullanılmıyor.
    return this.http.get<ServisGelenVeriler[]>("https://localhost:44347/api/products");
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
    console.log("response dönen cevap => "+ resp);
    if(resp ){
      this.alertify.success(id + "numaralı fatura başarıyla silinmiştir!");
    } else {
      this.alertify.warning("Fatura silinemedi! Hata Oluştu!");
    }
  }
  closeResult = '';
  open(content:any, id:any) {
    this.faturaDetayGetir(id);
    console.log("id => "+id);
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
