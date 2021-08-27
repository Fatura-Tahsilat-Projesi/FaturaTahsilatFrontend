import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-cards',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admin-dashboard-cards.component.html',
  styleUrls: ['./admin-dashboard-cards.component.scss']
})
export class AdminDashboardCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
