import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbInputDatepickerConfig, NgbCalendar, NgbTimepickerConfig, NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-kullanici-olustur',
  templateUrl: './kullanici-olustur.component.html',
  styleUrls: ['./kullanici-olustur.component.scss'],
  providers: [UserService]
})
export class KullaniciOlusturComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number; } | undefined;
  yetkiTip =[
    { id: 1, name: "Normal Kullanıcı" },
    { id: 2, name: "Admin" },
    { id: 3, name: "Süper Admin" }
  ];
  constructor(
    private http:HttpClient,
    private userService: UserService,
    private router: Router,
    config: NgbInputDatepickerConfig,
    calendar: NgbCalendar,
    configtime: NgbTimepickerConfig
  ) {
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
      //this.selectToday();
   }

  selectToday() {
    //this.model = this.calendar.getToday();
  }

  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;


  ngOnInit(): void {
  }

  

  createUser(userName:any, name:any, surname:any, authorization:any, tcNu:any, address:any, phoneNu:any, mail:any, iban:any) {

  var today = new Date();
  //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  console.log(today);
    const userInformation = {
      userName: userName.value,
      name: name.value,
      surname: surname.value,
      authorization: authorization.value,
      tcNu: tcNu.value,
      address: address.value,
      phoneNu: phoneNu.value,
      email: mail.value,
      iban: iban.value,
      createdAt: today
    };
    this.userService.createUser(userInformation).subscribe(data => 
      this.router.navigate(['dashboard/kullanicilar'])  
    );
  }


}
