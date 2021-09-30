import { Component, Input, OnInit } from '@angular/core';
import { AspUserData } from 'src/modules/data/aspuser.data';
import { AuthService } from 'src/services/auth.service';
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
    private authService:AuthService,
  ) { }

  error: any;
  result:AspUserData |undefined;
  response: any = {};

  ngOnInit(): void {
    //var id: number | null = localStorage.getItem('id');
    var id: string | null = localStorage.getItem('id');
    this.authService.getAspUserById(id).subscribe(data => {
      //this.result = data;
      this.response = data;
      data = this.response.data;
      this.result = data;
    }, error => this.error = error);
  }

}
