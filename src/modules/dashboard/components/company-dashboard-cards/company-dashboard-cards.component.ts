import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-dashboard-cards',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './company-dashboard-cards.component.html',
  styleUrls: ['./company-dashboard-cards.component.scss']
})
export class CompanyDashboardCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}