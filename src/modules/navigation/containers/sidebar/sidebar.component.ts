import { Component, Input, OnInit } from '@angular/core';
import { AspUserData } from 'src/modules/data/aspuser.data';
import { UserData } from 'src/modules/data/userData';
import { AspUserService } from 'src/services/aspuser.service';
import { UserService } from 'src/services/user.service';
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
  constructor(
    private aspUserService:AspUserService,
  ) { }

  error: any;
  result:AspUserData |undefined;
  ngOnInit(): void {
    //var id: number | null = localStorage.getItem('id');
    this.aspUserService.getUserById(+"8d75c6707f71").subscribe(data => {
      this.result = data;
    }, error => this.error = error);
  }

}
