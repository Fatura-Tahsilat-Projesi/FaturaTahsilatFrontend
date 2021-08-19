import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaturaOlusturService } from '../../../fatura-olustur.service';
import { FaturaModel } from '../../../../models/faturamodel';
@Component({
  selector: 'app-fatura-olustur',
  templateUrl: './fatura-olustur.component.html',
  styleUrls: ['./fatura-olustur.component.scss']
})
export class FaturaOlusturComponent implements OnInit {

  constructor(private http:HttpClient,
    private faturaOlusturmaServisi:FaturaOlusturService) { }

  ngOnInit(): void {
  }
  
  items: FaturaModel[] = [
    
  ];

  faturaTip =[
    { id: 1, name: "Elektrik" },
    { id: 2, name: "Su" },
    { id: 3, name: "Doğalgaz" },
    { id: 4, name: "İnternet" },
    { id: 5, name: "Mobil" },
    { id: 6, name: "Tv Yayın" }
  ];

  faturaOlustur(name: any, tutar:any, kdvsiztutar: any, categoryId: any) {
    // console.log(faturaAd.value);
    // console.log(tutar.value);
    // console.log(topkdv.value);
    // console.log(sontarih.value);
    // console.log(icerik.value);
    const faturaBilgileri = {
      
      name: name.value,
      tutar: parseInt(tutar.value),
      kdvsiztutar: parseInt(kdvsiztutar.value),
      categoryId: parseInt(categoryId.value)
      //kdvsiztutar: topkdv.value,
      //sontarih: new Date().getTime(),
      //icerik: icerik.value,
      //odendi: false
    };
    console.log("ts dosya girildi!");
    console.log("ts dosya => "+ JSON.stringify(faturaBilgileri));

    //this.faturaOlusturmaServisi.faturaOlustur(faturaBilgileri).subscribe(data => console.log(data));
    this.faturaOlusturmaServisi.faturaOlustur(faturaBilgileri).subscribe(data => console.log(data));

    /*this.faturaOlusturmaServisi
      .faturaOlustur(faturaBilgileri)
      .subscribe(data => this.items.push(data));*/


  }
  //this.FaturaOlusturService.deleteFatura(1).subscribe();
  


}
