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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import { AspUserService } from 'src/services/aspuser.service';


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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, AspUserService],
  exports: [...authContainers.containers, ...authComponents.components]
})
export class AuthModule { }
