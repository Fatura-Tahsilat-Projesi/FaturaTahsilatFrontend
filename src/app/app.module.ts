import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from '../modules/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../modules/sidebar/sidebar.component';
import { FooterComponent } from '../modules/footer/footer.component';
import { SideNavItemComponent } from '../modules/side-nav-item/side-nav-item.component';
import { HttpClientModule } from '@angular/common/http';


import { IconsModule } from '../modules/icons/icons.module';
import { LayoutDashboardComponent } from '../modules/layout-dashboard/layout-dashboard.component';
import { DashboardLayoutComponent } from '../modules/dashboard/dashboard-layout/dashboard-layout.component';
import { FaturaListeleComponent } from '../modules/fatura-listele/fatura-listele.component';
import { FaturaOlusturComponent } from '../modules/fatura-olustur/fatura-olustur.component';

const thirdParty = [IconsModule, NgbModule];
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    SideNavItemComponent,
    LayoutDashboardComponent,
    DashboardLayoutComponent,
    FaturaListeleComponent,
    FaturaOlusturComponent,
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
