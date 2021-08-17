import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServisGelenVeriler} from '../data/ServisGelenVeriler';
import { FaturaOlusturService } from '../fatura-olustur.service';
@Component({
  selector: 'app-fatura-listele',
  templateUrl: './fatura-listele.component.html',
  styleUrls: ['./fatura-listele.component.scss']
})
export class FaturaListeleComponent implements OnInit {

  constructor(private http:HttpClient,
    private faturaOlusturmaServisi:FaturaOlusturService) { }

  result:ServisGelenVeriler[]=[];
  ngOnInit(): void {
    this.getValues().subscribe(data =>{
      this.result = data;
    });
  }

  getValues(){
    return this.http.get<ServisGelenVeriler[]>("https://localhost:44347/weatherforecast");
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



}
