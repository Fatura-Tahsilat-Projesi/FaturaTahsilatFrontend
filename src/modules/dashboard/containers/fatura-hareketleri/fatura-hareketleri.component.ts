import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  fatura: InvoiceAndActivitiesData | any;
  //result: InvoiceActivitiesData[]=[];
  constructor(
    private faturaService: FaturaService,
    private activatedRoute: ActivatedRoute,
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

}
