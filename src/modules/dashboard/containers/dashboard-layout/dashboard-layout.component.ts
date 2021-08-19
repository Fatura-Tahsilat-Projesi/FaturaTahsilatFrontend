import { Component, Input, OnInit, HostBinding,ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { sideNavItems, sideNavSections } from '../../../navigation/data';
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
  sideNavSections = sideNavSections;
  sidenavStyle = 'sb-sidenav-dark';

    
  


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
