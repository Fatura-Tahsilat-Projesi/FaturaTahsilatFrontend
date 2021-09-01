import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '../app-common/app-common.module';
import { NavigationModule } from '../navigation/navigation.module';

/* Components */
import * as authComponents from './components';

/* Components */
import * as authContainers from './containers';


@NgModule({
  declarations: [
    ...authContainers.containers,
    ...authComponents.components
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppCommonModule,
    ReactiveFormsModule,
    FormsModule,
    NavigationModule
  ],
  exports: [...authContainers.containers, ...authComponents.components]
})
export class AuthModule { }
