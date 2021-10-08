import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaturaModel } from 'src/models/faturamodel';
import { ServisGelenVeriler } from 'src/modules/data/ServisGelenVeriler';
import { FaturaService } from 'src/services/fatura.service';
import { 
  NgbDateStruct,
  NgbCalendar,
  NgbDate,
  NgbInputDatepickerConfig,
  NgbTimeStruct, 
  } from '@ng-bootstrap/ng-bootstrap';
  import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from 'src/services/company.service';
@Component({
  selector: 'app-fatura-duzenle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fatura-duzenle.component.html',
  styleUrls: ['./fatura-duzenle.component.scss'],
  providers: [FaturaService, NgbInputDatepickerConfig, NgbTimepickerConfig, CompanyService]
})
export class FaturaDuzenleComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number; } | undefined;

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
  dateIdVariable: any;
  selectedCompany: any;
  selectedDevice: any;
  selectedDate: any;
  resultValue: boolean | undefined;
  
  constructor(
    private faturaService: FaturaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private companyService:CompanyService,
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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.faturaService.getFaturaById(params["id"]).subscribe(data => {
        this.fatura = data;
        //this.fatura.name = data?.name;
        //this.fatura.tutar = data?.tutar;
        //this.fatura.categoryId = data?.categoryId;
        this.categoryIdVariable = data?.invoiceType;
        this.dateIdVariable = data?.dueDate;
        this.selectedCompany = data?.companyId;
        this.onChange(this.categoryIdVariable);
        this.onChangeCompany(this.selectedCompany);
        this.onChangeDate(this.dateIdVariable);
        //this.fatura.kdvsizTutar = data?.kdvsizTutar;
        //console.log(this.fatura.name);
        //console.log(this.fatura.tutar);

      })
    });
    
  }

  selectToday() {
    //this.model = this.calendar.getToday();
  }

  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
  }


  onChange(categoryIdVariable:any) {
    //console.log(categoryIdVariable);
    this.selectedDevice = categoryIdVariable;
  }

  onChangeCompany(companyIdVariable:any) {
    var tmp:any = {};
    this.companyService.getCompanyById(companyIdVariable).subscribe(data => {
      this.selectedCompany = data.name;
    });
    //console.log("firma ismi => "+this.selectedCompany);
  }

  onChangeDate(dateIdVariable:any) {
    //console.log(categoryIdVariable);
    this.model = dateIdVariable;
  }



  updateInvoice(name: any, total:any, totalVat:any, dueDate: any, invoiceType: any, invoiceNu: any, statusCode:any, isComplete:any, companyId:any ,userId:any ) {

    const faturaBilgileri = {
      invoiceId: this.fatura?.invoiceId,
      invoiceNu: invoiceNu.value,
      //Math.floor(Math.random() * (99999999999 -  10000000000)) + 10000000000;
      name: name.value,
      total: parseInt(total.value),
      totalVat: parseInt(totalVat.value),
      excludingVat: parseInt(total.value) - parseInt(totalVat.value),
      dueDate: dueDate.value,
      isComplete: isComplete.value,
      invoiceType: parseInt(invoiceType.value),
      statusCode: statusCode.value,
      companyId: companyId.value,
      userId: userId.value
      };
    this.faturaService.updateNormalInvoice(faturaBilgileri).subscribe(data =>
      this.router.navigate(['dashboard/faturalarim'])  
    );
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
