import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from '../modules/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { IconsModule } from '../modules/icons/icons.module';
import { LayoutDashboardComponent } from '../modules/layout-dashboard/layout-dashboard.component';
import { ModalComponent } from './modal/modal.component';

const thirdParty = [IconsModule, NgbModule];
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LayoutDashboardComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...thirdParty
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
