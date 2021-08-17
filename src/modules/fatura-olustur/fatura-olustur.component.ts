import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaturaOlusturService } from '../fatura-olustur.service';
import { FaturaModel } from '../../models/faturamodel';
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
  faturaOlustur(faturaAd: any, tutar: any, topkdv: any, sontarih: any, icerik: any) {
    // console.log(faturaAd.value);
    // console.log(tutar.value);
    // console.log(topkdv.value);
    // console.log(sontarih.value);
    // console.log(icerik.value);
    const faturaBilgileri = {
      id: 0,
      faturaAd: faturaAd.value,
      tutar: tutar.value,
      topkdv: topkdv.value,
      sontarih: new Date().getTime(),
      icerik: icerik.value,
      odendi: false
    };

    this.faturaOlusturmaServisi.faturaOlustur(faturaBilgileri).subscribe(data => console.log(data));
  }
  //this.FaturaOlusturService.deleteFatura(1).subscribe();
  


}
