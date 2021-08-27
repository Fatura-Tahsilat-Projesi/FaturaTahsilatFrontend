import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyData } from 'src/modules/data/companyData';
import { CompanyService } from 'src/services/company.service';

@Component({
  selector: 'app-firma-duzenle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './firma-duzenle.component.html',
  styleUrls: ['./firma-duzenle.component.scss'],
  providers: [CompanyService]
})
export class FirmaDuzenleComponent implements OnInit {

  company: CompanyData | undefined;
  selectedCompanyType: any;
  firmaTip =[
    { id: 1, name: "Elektrik Firması" },
    { id: 2, name: "Su Firması" },
    { id: 3, name: "Doğalgaz Firması" },
    { id: 4, name: "İnternet Firması" },
    { id: 5, name: "Mobil Firması" },
    { id: 6, name: "Tv Yayın Firması" }
  ];

  constructor(
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.companyService.getCompanyById(params["id"]).subscribe(data => {
        this.company = data;
        this.selectedCompanyType = data?.category;
        console.log("data=> "+data);
        console.log("this.company=> "+this.company);
      })
    });
  }
  
  onChangeCompanyType(selectedCompanyType:any)
  {
    this.selectedCompanyType = selectedCompanyType;
  }

  updateCompany(name: any, category:any, companyCode:any ) {

    const companyInformation = {
      id: this.company?.id,
      name: name.value,
      category: category.value,
      companyCode: companyCode.value
      };
    this.companyService.updateCompany(companyInformation).subscribe(data => 
      this.router.navigate(['dashboard/firmalar'])  
    );
  }


}
