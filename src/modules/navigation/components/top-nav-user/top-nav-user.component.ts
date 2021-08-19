import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { UserService } from '@modules/auth/services';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {

    user = {
        firstName: "Muhammed",
        lastName: "Karadaş",
        email: "test@test.com"
    };

    constructor() {}
    ngOnInit() {}
}
