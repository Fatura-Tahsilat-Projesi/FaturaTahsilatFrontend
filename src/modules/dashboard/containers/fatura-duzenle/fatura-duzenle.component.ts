import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fatura-duzenle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fatura-duzenle.component.html',
  styleUrls: ['./fatura-duzenle.component.scss']
})
export class FaturaDuzenleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
