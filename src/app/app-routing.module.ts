import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaturaListeleComponent } from '../modules/fatura-listele/fatura-listele.component';
import { FaturaOlusturComponent } from '../modules/fatura-olustur/fatura-olustur.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
