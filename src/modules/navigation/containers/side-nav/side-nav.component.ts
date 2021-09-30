import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
// import { UserService } from '@modules/auth/services';
import { SideNavItems, SideNavSection, SideNavCompanySection, SideNavCompanyItems, SideNavEmployeeSection, SideNavEmployeeItems } from '../../models';
import { NavigationService } from '../../services';
import { Subscription } from 'rxjs';
import { AspUserData } from 'src/modules/data/aspuser.data';
import { AspUserService } from 'src/services/aspuser.service';
import { AspUserModel } from 'src/models/aspusermodel';
import { AuthService } from 'src/services/auth.service';

@Component({
    selector: 'sb-side-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
    providers: [AuthService]
})
export class SideNavComponent implements OnInit, OnDestroy {
    @Input() sidenavStyle!: string;
    @Input() sideNavItems!: SideNavItems;
    @Input() sideNavSections!: SideNavSection[];
    @Input() sideNavCompanyItems!: SideNavCompanyItems;
    @Input() sideNavCompanySections!: SideNavCompanySection[];
    @Input() sideNavEmployeeItems!: SideNavEmployeeItems;
    @Input() sideNavEmployeeSections!: SideNavEmployeeSection[];

    subscription: Subscription = new Subscription();
    routeDataSubscription!: Subscription;
    role = localStorage.getItem('role');

    constructor(public navigationService: NavigationService, private authService:AuthService,) {}

    error: any;
    result: AspUserData | undefined;
    username: string | undefined | null;
    response: any = {};
    selectedStatusCode: any;
    ngOnInit(): void {
        this.username = localStorage.getItem("username");
        var id: string | null = localStorage.getItem('id');
        this.authService.getAspUserById(id).subscribe(data => {
        this.response = data;
        data = this.response.data;
        //this.username = data.userName;
        this.onChangeUserName(data.userName);
        //console.log("username => "+this.username);
        //console.log("data => "+data);
        }, error => this.error = error);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onChangeUserName(username: any) {
        this.username = username;
    }

    onChangeStatusCode(id:any) {
        if(id >=0 && id <=3) {
            this.selectedStatusCode = this.result?.userName;
        } else {
            this.selectedStatusCode = "Hata!";
        }
    }

}
