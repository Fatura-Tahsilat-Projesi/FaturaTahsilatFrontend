import { Component, Input, OnInit } from '@angular/core';
import { sideNavItems, sideNavSections } from '../../data';


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  @Input() static = false;
  sideNavItems = sideNavItems;
  sideNavSections = sideNavSections;
  sidenavStyle = 'sb-sidenav-dark';

  constructor() { }

  ngOnInit(): void {
  }

}
