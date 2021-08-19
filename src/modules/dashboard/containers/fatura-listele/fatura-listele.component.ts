import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServisGelenVeriler} from '../../../data/ServisGelenVeriler';
import { FaturaOlusturService } from '../../../fatura-olustur.service';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FaturaModel } from 'src/models/faturamodel';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fatura-listele',
  templateUrl: './fatura-listele.component.html',
  styleUrls: ['./fatura-listele.component.scss'],
  providers: [FaturaOlusturService]
})
export class FaturaListeleComponent implements OnInit {

  //faturaModel: FaturaModel;
  faturaDetay: FaturaModel | undefined;
  constructor(private http:HttpClient,
    private faturaOlusturmaServisi:FaturaOlusturService, private modalService: NgbModal, private activatedRoute: ActivatedRoute) { }

  result:ServisGelenVeriler[]=[];
  ngOnInit(): void {
    this.getValues().subscribe(data =>{
      this.result = data;
    });
  }

  faturaTip =[
    { id: 1, name: "Elektrik" },
    { id: 2, name: "Su" },
    { id: 3, name: "Doğalgaz" },
    { id: 4, name: "İnternet" },
    { id: 5, name: "Mobil" },
    { id: 6, name: "Tv Yayın" }
  ];


  getValues(){
    return this.http.get<ServisGelenVeriler[]>("https://localhost:44347/api/products");
  }
  
  faturaDetayGetir(id: any) {
    this.faturaOlusturmaServisi.faturaDetayGetir(id).subscribe(data => {
      this.faturaDetay = data;
      console.log(data);
    })
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
    this.faturaOlusturmaServisi.deleteFatura(id).subscribe(data => console.log(data));
  }
  closeResult = '';
  open(content:any, id:any) {
    this.faturaDetayGetir(id);
    console.log("id => "+id);
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
