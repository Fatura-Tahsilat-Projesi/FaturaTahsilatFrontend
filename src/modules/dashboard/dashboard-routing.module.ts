/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '../../models';

// /* Module */
import { DashboardModule } from './dashboard.module';

/* Containers */
import * as dashboardContainers from './containers';

import { FaturaListeleComponent } from './containers/fatura-listele/fatura-listele.component';
import { AuthGuard } from 'src/guards/auth.guard';

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
        canActivate: [AuthGuard],
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
        path: 'yenifatura',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Fatura Oluştur',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.FaturaOlusturComponent
    },
    {
        path: 'faturaodeme',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Fatura Öde',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.FaturaOdeComponent
    },
    {
        path: 'faturahareketleri',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Fatura Hareketleri',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.FaturaHareketComponent
    },
    {
        path: 'yenifirma',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Yeni Firma Oluştur',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.FirmaOlusturComponent
    },
    {
        path: 'yenikullanici',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Yeni Kullanıcı Oluştur',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.KullaniciOlusturComponent
    },
    {
        path: 'yenikart',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Yeni Kredi Kartı Oluştur',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.NewCreditCardComponent
    },
    {
        path: 'faturalar',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Tüm Faturalar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.TumFaturalarComponent
    },
    {
        path: 'firmalar',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Tüm Firmalar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.TumFirmalarComponent
    },
    {
        path: 'kullanicilar',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Tüm Kullanıcılar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.TumKullanicilarAspComponent
    },
    {
        path: 'ozelkullanicilar',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Tüm Kullanıcılar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.TumKullanicilarComponent
    },
    {
        path:'ayarlar',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Ayarlar',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.AyarlarComponent
    },
    {
        path:'hesapbilgilerim',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Hesap Bilgilerim',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.PaymentAccountInformationComponent
    },
    {
        path:'faturadetay/:id',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
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
        path:'faturahareket/:id',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Fatura Hareketleri',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.FaturaHareketleriComponent
    },
    {
        path:'kullanicidetay/:id',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Kullanıcı Düzenle',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.KullaniciDuzenleComponent
    },
    {
        path:'firmadetay/:id',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Firma Düzenle',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.FirmaDuzenleComponent
    },
    {
        path:'kartdetay/:id',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard/',
                },
                {
                    text: 'Kredi Kart Düzenle',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.UpdateCreditCardComponent
    },
    
];

@NgModule({
    imports: [DashboardModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
