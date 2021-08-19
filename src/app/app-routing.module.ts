import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaturaListeleComponent } from '../modules/dashboard/containers/fatura-listele/fatura-listele.component';
import { FaturaOlusturComponent } from '../modules/dashboard/containers/fatura-olustur/fatura-olustur.component';
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
