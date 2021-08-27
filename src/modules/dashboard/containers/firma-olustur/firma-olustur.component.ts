import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/services/company.service';

@Component({
  selector: 'app-firma-olustur',
  templateUrl: './firma-olustur.component.html',
  styleUrls: ['./firma-olustur.component.scss'],
  providers: [CompanyService]
})
export class FirmaOlusturComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private companyService: CompanyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  faturaTip =[
    { id: 1, name: "Elektrik" },
    { id: 2, name: "Su" },
    { id: 3, name: "Doğalgaz" },
    { id: 4, name: "İnternet" },
    { id: 5, name: "Mobil" },
    { id: 6, name: "Tv Yayın" }
  ];


  createCompany(name: any, category:any, companyCode:any) {

    const companyInformation = {
      name: name.value,
      category: category.value,
      companyCode: companyCode.value
    };
    this.companyService.createCompany(companyInformation).subscribe(data => 
      this.router.navigate(['dashboard/firmalar'])  
    );
  }



}
