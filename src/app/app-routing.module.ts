import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Containers */
import * as authContainers from '../modules/auth/containers';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
        import('../modules/dashboard/dashboard-routing.module').then(
            m => m.DashboardRoutingModule
        ),
  },
  {
    path: 'auth',
    loadChildren: () =>
        import('../modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
