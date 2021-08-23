import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Containers */
import * as dashboardContainers from '../modules/dashboard/containers';
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
    path: 'faturadetay',
    component: dashboardContainers.FaturaDuzenleComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
