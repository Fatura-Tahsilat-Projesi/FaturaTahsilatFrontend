import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayarlar',
  templateUrl: './ayarlar.component.html',
  styleUrls: ['./ayarlar.component.scss']
})
export class AyarlarComponent implements OnInit {

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
