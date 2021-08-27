import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyModel } from 'src/models/companymodel';
import { CompanyData } from 'src/modules/data/companyData';
import { AlertifyService } from 'src/services/alertify.service';
import { CompanyService } from 'src/services/company.service';

@Component({
  selector: 'app-tum-firmalar',
  templateUrl: './tum-firmalar.component.html',
  styleUrls: ['./tum-firmalar.component.scss'],
  providers: [CompanyService]
})
export class TumFirmalarComponent implements OnInit {


  error: any;
  searchActive = false;


  constructor(
    private http:HttpClient,
    private companyService:CompanyService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertify: AlertifyService
  ) { }

  result:CompanyData[]=[];
  ngOnInit(): void {
    this.companyService.getAllCompany().subscribe(data => {
      this.result = data;
    }, error => this.error = error)
  }

  deleteCompany(id: any)
  {
    let resp;
    resp = this.companyService.deleteCompany(id).subscribe(data =>
      this.router.navigate(['dashboard/firmalar']) 
    );
    console.log("response dönen cevap => "+ resp);
    if(resp){
      this.alertify.success(id + "numaralı firma başarıyla silinmiştir!");
    } else {
      this.alertify.warning("Firma silinemedi! Hata Oluştu!");
    }
    //window.location.reload();
  }


}
