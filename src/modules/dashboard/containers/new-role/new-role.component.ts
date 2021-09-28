import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss'],
  providers: [AuthService, AlertifyService]
})
export class NewRoleComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router: Router,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit(): void {
  }

  createRole(name: any) {
    const roleInformation = {
      name: name.value,
      customName: name.value
    };
    this.authService.createRole(roleInformation).subscribe(data => {
      if(data) {
        this.alertifyService.success("Rol Başarıyla Oluşturuldu.");
      } else {
        this.alertifyService.error("Rol Oluşturulamadı!");
      }
      this.router.navigate(['dashboard/roller'])  
    });
  }

}
