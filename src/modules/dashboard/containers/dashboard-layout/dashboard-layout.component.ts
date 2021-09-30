import { Component, Input, OnInit, HostBinding,ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { sideNavItems, sideNavSections, sideNavCompanyItems, sideNavCompanySections, sideNavEmployeeItems, sideNavEmployeeSections } from '../../../navigation/data';
import { Subscription } from 'rxjs';
import { NavigationService } from '../../../navigation/services';

@Component({
  selector: 'app-dashboard-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  @Input() light = false;
  @Input() static = false;
  @HostBinding('class.sb-sidenav-toggled') sideNavHidden = false;
  subscription: Subscription = new Subscription();
  sideNavItems = sideNavItems;
  sideNavCompanyItems= sideNavCompanyItems;
  sideNavSections = sideNavSections;
  sideNavCompanySections = sideNavCompanySections;
  sideNavEmployeeItems = sideNavEmployeeItems;
  sideNavEmployeeSections = sideNavEmployeeSections;
  sidenavStyle = 'sb-sidenav-dark';
  role = localStorage.getItem('role');
    
  


  constructor(
    public navigationService: NavigationService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.light) {
      this.sidenavStyle = 'sb-sidenav-light';
    }
    this.subscription.add(
        this.navigationService.sideNavVisible$().subscribe(isVisible => {
            this.sideNavHidden = !isVisible;
            this.changeDetectorRef.markForCheck();
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
