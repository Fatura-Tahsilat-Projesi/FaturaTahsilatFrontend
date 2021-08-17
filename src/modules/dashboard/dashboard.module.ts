/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// /* Modules */
import { AppCommonModule } from '../app-common/app-common.module';
// import { NavigationModule } from '@modules/navigation/navigation.module';
// import { ChartsModule } from '@modules/charts/charts.module';
// import { TablesModule } from '@modules/tables/tables.module';

/* Components */
import * as dashboardComponents from './components';

/* Containers */
import * as dashboardContainers from './containers';

/* Guards */
// import * as dashboardGuards from './guards';

// /* Services */
// import * as dashboardServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppCommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    declarations: [...dashboardContainers.containers, ...dashboardComponents.components],
    exports: [...dashboardContainers.containers, ...dashboardComponents.components],
})
export class DashboardModule {}
