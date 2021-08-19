/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '../app-common/app-common.module';
import { NavigationModule } from '../navigation/navigation.module';

/* Components */
import * as chartsComponents from './components';

/* Containers */
import * as chartsContainers from './containers';

/* Services */
import * as chartsServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...chartsServices.services],
    declarations: [...chartsContainers.containers, ...chartsComponents.components],
    exports: [...chartsContainers.containers, ...chartsComponents.components],
})
export class ChartsModule {}
