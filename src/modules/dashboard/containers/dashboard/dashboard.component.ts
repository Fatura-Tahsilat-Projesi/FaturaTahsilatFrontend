import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
    providers: [AuthService]
})
export class DashboardComponent implements OnInit {
    constructor(
        private authService:AuthService
    ) {}

    response: any = {};
    role = localStorage.getItem('role');
    role2: string | undefined;
    ngOnInit() {
        var id: string | null = localStorage.getItem('id');
        this.authService.getAspUserRoleById(id).subscribe( data => {
            this.response = data;
            console.log("rol data => "+JSON.stringify(data));
            data = this.response.data;
            this.role2 = data?.rolName;
            console.log("role => "+this.role);
        });
    }
}
