import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/models/AuthResponse';
import { UserModel } from 'src/models/usermodel';
import { AspUserData } from 'src/modules/data/aspuser.data';
import { AspUserService } from 'src/services/aspuser.service';
import { AuthService } from 'src/services/auth.service';
// import { UserService } from '@modules/auth/services';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
    providers: [AuthService, AspUserService]
})
export class TopNavUserComponent implements OnInit {

    user2 = {
        firstName: "Muhammed",
        lastName: "Karadaş",
        email: "test@test.com"
    };
    userData: AuthResponse | any;
    isAuthenticated: boolean = false;

    error: any;
    result: AspUserData | undefined;
    username: string | undefined | null;
    email: string | undefined | null;
    response: any = {};
    
    constructor(
        private authService: AuthService,
        private router: Router,
        private aspUserService: AspUserService) {}
    ngOnInit() {
        this.authService.user.subscribe(user => {
            //this.isAuthenticated = !!user;
            this.isAuthenticated = !!localStorage.getItem('accessToken');
            //console.log("isAuthenticated => " + this.isAuthenticated);
            this.userData = user;
            //console.log("userData => "+JSON.stringify(user));
        });
        var id: string | null = localStorage.getItem('id');
        this.authService.getAspUserById(id).subscribe(data => {
            this.response = data;
            data = this.response.data;
            this.username = data.userName;
            this.email = data.email;
            //this.onChangeUserName(data.userName);
            //console.log("username => "+this.username);
            //console.log("data => "+data);
            }, error => this.error = error);
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }


}
