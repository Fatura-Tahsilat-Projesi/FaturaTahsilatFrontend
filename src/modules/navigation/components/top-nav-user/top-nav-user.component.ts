import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/models/AuthResponse';
import { UserModel } from 'src/models/usermodel';
import { AuthService } from 'src/services/auth.service';
// import { UserService } from '@modules/auth/services';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {

    user2 = {
        firstName: "Muhammed",
        lastName: "Karadaş",
        email: "test@test.com"
    };
    userData: AuthResponse | any;
    isAuthenticated: boolean = false;
    constructor(
        private authService: AuthService,
        private router: Router) {}
    ngOnInit() {
        this.authService.user.subscribe(user => {
            //this.isAuthenticated = !!user;
            this.isAuthenticated = !!localStorage.getItem('accessToken');
            //console.log("isAuthenticated => " + this.isAuthenticated);
            this.userData = user;
            //console.log("userData => "+JSON.stringify(user));
        });
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }


}
