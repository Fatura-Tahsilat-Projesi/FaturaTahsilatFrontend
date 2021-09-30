/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// /* Modules */
import { AppCommonModule } from '../app-common/app-common.module';
import { NavigationModule } from '../navigation/navigation.module';
import { ChartsModule } from '../charts/charts.module';
import { TablesModule } from '../tables/tables.module';

/* Components */
import * as dashboardComponents from './components';

/* Containers */
import * as dashboardContainers from './containers';

/* Guards */
// import * as dashboardGuards from './guards';

// /* Services */
import * as dashboardServices from './services';
import { AlertifyService } from 'src/services/alertify.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import { AspUserService } from 'src/services/aspuser.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppCommonModule,
        ReactiveFormsModule,
        FormsModule,
        NavigationModule,
        ChartsModule,
        TablesModule
    ],
    providers: [...dashboardServices.services, AlertifyService, AspUserService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
    declarations: [...dashboardContainers.containers, ...dashboardComponents.components],
    exports: [...dashboardContainers.containers, ...dashboardComponents.components],
})
export class DashboardModule {}
