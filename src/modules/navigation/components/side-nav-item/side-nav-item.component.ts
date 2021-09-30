import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SBRouteData, SideNavItem, SideNavCompanyItem } from '../../models';

@Component({
    selector: 'app-side-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav-item.component.html',
    styleUrls: ['side-nav-item.component.scss'],
})
export class SideNavItemComponent implements OnInit {
    @Input() sideNavItem!: SideNavItem;
    @Input() sideNavCompanyItem!: SideNavCompanyItem;
    @Input() isActive!: boolean;

    expanded = false;
    routeData!: SBRouteData;
    role = localStorage.getItem('role');

    constructor() {}
    ngOnInit() {}
}
