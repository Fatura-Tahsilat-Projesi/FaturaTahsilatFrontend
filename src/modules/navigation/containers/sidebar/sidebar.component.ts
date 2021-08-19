import { Component, Input, OnInit } from '@angular/core';
import { SideNavItems, SideNavSection } from '../../models/navigation.model';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sidenavStyle!: string;
  @Input() sideNavItems!: SideNavItems;
  @Input() sideNavSections!: SideNavSection[];
  constructor() { }

  ngOnInit(): void {
  }


}
