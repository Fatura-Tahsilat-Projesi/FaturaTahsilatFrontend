import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceActivitiesData } from 'src/modules/data/invoiceActivitiesData';
import { InvoiceActivitiesService } from 'src/services/invoiceActivities.service';

@Component({
  selector: 'app-fatura-hareketleri',
  templateUrl: './fatura-hareketleri.component.html',
  styleUrls: ['./fatura-hareketleri.component.scss'],
  providers: [InvoiceActivitiesService]
})
export class FaturaHareketleriComponent implements OnInit {

  fatura: InvoiceActivitiesData | undefined;
  result: InvoiceActivitiesData[]=[];
  constructor(
    private invoiceActivitiesService: InvoiceActivitiesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.invoiceActivitiesService.getInvoiceActivitiesById(params["id"]).subscribe(data => {
        this.fatura = data;
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
