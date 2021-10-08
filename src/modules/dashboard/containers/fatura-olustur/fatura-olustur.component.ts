import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaturaOlusturService } from '../../../fatura-olustur.service';
import { FaturaModel } from '../../../../models/faturamodel';
import { FaturaService } from 'src/services/fatura.service';
import { Router } from '@angular/router';
import { 
  NgbDateStruct,
  NgbCalendar,
  NgbDate,
  NgbInputDatepickerConfig,
  NgbTimeStruct, 
  } from '@ng-bootstrap/ng-bootstrap';
  import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from 'src/services/company.service';
import { CompanyData } from 'src/modules/data/companyData';
import { AlertifyService } from 'src/services/alertify.service';
import { UserData } from 'src/modules/data/userData';
import { AspUserService } from 'src/services/aspuser.service';
import { AspUserData } from 'src/modules/data/aspuser.data';
@Component({
  selector: 'app-fatura-olustur',
  templateUrl: './fatura-olustur.component.html',
  styleUrls: ['./fatura-olustur.component.scss'],
  providers: [FaturaService, CompanyService, AspUserService, NgbInputDatepickerConfig, NgbTimepickerConfig, AlertifyService]
})
export class FaturaOlusturComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number; } | undefined;

  constructor(private http:HttpClient,
    private faturaService: FaturaService,
    private router: Router,
    private companyService:CompanyService,
    private aspUserService:AspUserService,
    private alertifyService: AlertifyService,
    config: NgbInputDatepickerConfig,
    calendar: NgbCalendar,
    configtime: NgbTimepickerConfig) {
      configtime.seconds = true;
      configtime.spinners = false;
      //model: NgbDateStruct;
      // customize default values of datepickers used by this component tree
      config.minDate = {year: 1900, month: 1, day: 1};
      config.maxDate = {year: 2099, month: 12, day: 31};

      // days that don't belong to current month are not visible
      config.outsideDays = 'hidden';

      // weekends are disabled
      //config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;

      // setting datepicker popup to close only on click outside
      config.autoClose = 'outside';

      // setting datepicker popup to open above the input
      config.placement = ['top-left', 'top-right'];

  }
  companyResult:CompanyData[]=[];
  error: any;
  searchActive = false;
  userResult:AspUserData[]=[];
  userResult2: any = {};
  ngOnInit(): void {
    this.companyService.getAllCompany().subscribe(data => {
      this.companyResult = data;
      console.log("firmalar => "+JSON.stringify(data));
    }, error => this.error = error);
    this.aspUserService.getAllUser().subscribe(data => {
      this.userResult2 = data;
      data = this.userResult2.data;
      this.userResult = data;
    }, error => this.error = error);
  }
  
  selectToday() {
    //this.model = this.calendar.getToday();
  }

  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
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
  

  createFatura(name: any, total:any, totalVat:any, dueDate: any, companyId:any, userId:any, invoiceType: any) {

    const faturaBilgileri = {
      invoiceNu: 0,
      //Math.floor(Math.random() * (99999999999 -  10000000000)) + 10000000000;
      name: name.value,
      total: parseInt(total.value),
      totalVat: parseInt(totalVat.value),
      excludingVat: parseInt(total.value) - parseInt(totalVat.value),
      dueDate: dueDate.value,
      isComplete: 0,
      invoiceType: parseInt(invoiceType.value),
      statusCode: 0,
      companyId: companyId.value,
      userId: userId.value
      };
    this.faturaService.createFatura(faturaBilgileri).subscribe(data => 
      this.router.navigate(['dashboard/firmafaturalar'])  
    );
  }

  // faturaOlustur(name: any, tutar:any, kdvsizTutar: any, categoryId: any) {
  //   // console.log(faturaAd.value);
  //   // console.log(tutar.value);
  //   // console.log(topkdv.value);
  //   // console.log(sontarih.value);
  //   // console.log(icerik.value);
  //   const faturaBilgileri = {
      
  //     name: name.value,
  //     tutar: parseInt(tutar.value),
  //     kdvsizTutar: parseInt(kdvsizTutar.value),
  //     categoryId: parseInt(categoryId.value)
  //     //kdvsizTutar: topkdv.value,
  //     //sontarih: new Date().getTime(),
  //     //icerik: icerik.value,
  //     //odendi: false
  //   };
  //   console.log("ts dosya girildi!");
  //   console.log("ts dosya => "+ JSON.stringify(faturaBilgileri));

  //   //this.faturaOlusturmaServisi.faturaOlustur(faturaBilgileri).subscribe(data => console.log(data));
  //   this.faturaOlusturmaServisi.faturaOlustur(faturaBilgileri).subscribe(data => console.log(data));

  //   /*this.faturaOlusturmaServisi
  //     .faturaOlustur(faturaBilgileri)
  //     .subscribe(data => this.items.push(data));*/


  // }
  //this.FaturaOlusturService.deleteFatura(1).subscribe();
  

  

}
