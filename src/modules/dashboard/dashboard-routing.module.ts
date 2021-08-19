/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '../../models';
import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';

// /* Module */
import { DashboardModule } from './dashboard.module';

/* Containers */
import * as dashboardContainers from './containers';

import { FaturaListeleComponent } from './containers/fatura-listele/fatura-listele.component';
import { FaturaOlusturComponent } from './containers/fatura-olustur/fatura-olustur.component';
import { FaturaDuzenleComponent } from 'src/modules/dashboard/containers/fatura-duzenle/fatura-duzenle.component';

// /* Guards */
// import * as dashboardGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.DashboardComponent,
    },
    { 
        path: 'faturalarim',
        data: {
            title: 'Dashboard Static - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Faturalarım',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: FaturaListeleComponent,
    },
    {
        path: 'static',
        data: {
            title: 'FaturaTahsilatFrontend',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Static',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.StaticComponent,
    },
    {
        path: 'light',
        data: {
            title: 'Dashboard Light - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Light',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.LightComponent,
    },
    {
        path: 'faturadetay',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/faturadetay/',
                },
                {
                    text: 'Fatura Detay',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.FaturaDuzenleComponent
    },
    {
        path: 'yenifatura',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/yenifatura/',
                },
                {
                    text: 'Fatura Oluştur',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.FaturaOlusturComponent
    }
];

@NgModule({
    imports: [DashboardModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
