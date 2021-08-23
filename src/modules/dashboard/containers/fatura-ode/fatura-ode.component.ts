import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fatura-ode',
  templateUrl: './fatura-ode.component.html',
  styleUrls: ['./fatura-ode.component.scss']
})
export class FaturaOdeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faturaTip =[
    { id: 1, name: "Elektrik" },
    { id: 2, name: "Su" },
    { id: 3, name: "Doğalgaz" },
    { id: 4, name: "İnternet" },
    { id: 5, name: "Mobil" },
    { id: 6, name: "Tv Yayın" }
  ];

}
