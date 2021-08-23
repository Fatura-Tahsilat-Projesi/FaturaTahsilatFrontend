import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaturaModel } from 'src/models/faturamodel';
import { ServisGelenVeriler } from 'src/modules/data/ServisGelenVeriler';
import { FaturaService } from 'src/services/fatura.service';

@Component({
  selector: 'app-fatura-duzenle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fatura-duzenle.component.html',
  styleUrls: ['./fatura-duzenle.component.scss'],
  providers: [FaturaService]
})
export class FaturaDuzenleComponent implements OnInit {


  faturaTip =[
    { id: 1, name: "Elektrik" },
    { id: 2, name: "Su" },
    { id: 3, name: "Doğalgaz" },
    { id: 4, name: "İnternet" },
    { id: 5, name: "Mobil" },
    { id: 6, name: "Tv Yayın" }
  ];

  fatura: ServisGelenVeriler | undefined;
  //result:ServisGelenVeriler[]=[];
  categoryIdVariable: any;
  selectedDevice: any;
  resultValue: boolean | undefined;
  
  constructor(
    private faturaService: FaturaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.faturaService.getFaturaById(params["id"]).subscribe(data => {
        this.fatura = data;
        //this.fatura.name = data?.name;
        //this.fatura.tutar = data?.tutar;
        //this.fatura.categoryId = data?.categoryId;
        this.categoryIdVariable = data?.categoryId;
        this.onChange(this.categoryIdVariable);
        //this.fatura.kdvsizTutar = data?.kdvsizTutar;
        //console.log(this.fatura.name);
        //console.log(this.fatura.tutar);

      })
    });
    
  }

  onChange(categoryIdVariable:any) {
    //console.log(categoryIdVariable);
    this.selectedDevice = categoryIdVariable;
  }

  // isEmpty(obj: any) {
  //   console.log("obj => "+obj);
  //   for(var prop in obj) {
  //     if(obj.hasOwnProperty(prop)) {
  //       return false;
  //     }
  //   }
  //   console.log(JSON.stringify(obj));
  //   console.log("stringify => "+JSON.stringify(obj) === JSON.stringify({}));
  

  //   if (JSON.stringify(obj) === JSON.stringify({})) {//boş
  //     this.resultValue = true;
  //   }
  //   else if( JSON.stringify(obj)) { //undefined
  //     this.resultValue = true;
  //   }
  //   else {
  //     this.resultValue = false;
  //   }
  //   console.log("result value => "+this.resultValue);
  //   return this.resultValue;
  // }




}
