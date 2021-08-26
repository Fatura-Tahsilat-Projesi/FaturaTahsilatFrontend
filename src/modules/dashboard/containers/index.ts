import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './light/light.component';
import { StaticComponent } from './static/static.component';
import { FaturaDuzenleComponent } from './fatura-duzenle/fatura-duzenle.component';
import { FaturaOlusturComponent } from './fatura-olustur/fatura-olustur.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { FooterComponent } from './footer/footer.component';
import { FaturaListeleComponent } from './fatura-listele/fatura-listele.component';
import { FaturaOdeComponent } from './fatura-ode/fatura-ode.component';
import { AyarlarComponent } from './ayarlar/ayarlar.component';
import { FaturaHareketComponent } from './fatura-hareket/fatura-hareket.component';
import { FirmaOlusturComponent } from './firma-olustur/firma-olustur.component';
import { KullaniciOlusturComponent } from './kullanici-olustur/kullanici-olustur.component';
import { TumFaturalarComponent } from './tum-faturalar/tum-faturalar.component';
import { TumFirmalarComponent } from './tum-firmalar/tum-firmalar.component';
import { TumKullanicilarComponent } from './tum-kullanicilar/tum-kullanicilar.component';


export const containers = [DashboardComponent, StaticComponent, LightComponent, FaturaDuzenleComponent, DashboardLayoutComponent, FaturaOlusturComponent, FaturaListeleComponent, FaturaOdeComponent, FooterComponent, AyarlarComponent, FaturaHareketComponent, FirmaOlusturComponent, KullaniciOlusturComponent, TumFaturalarComponent, TumFirmalarComponent, TumKullanicilarComponent];

export * from './dashboard/dashboard.component';
// export * from '../dashboard-layout/dashboard-layout.component';
export * from './static/static.component';
export * from './light/light.component';
export * from './fatura-duzenle/fatura-duzenle.component';
export * from './fatura-olustur/fatura-olustur.component';
export * from './fatura-listele/fatura-listele.component';
export * from './fatura-ode/fatura-ode.component';
export * from './dashboard-layout/dashboard-layout.component';
export * from './footer/footer.component';
export * from './ayarlar/ayarlar.component'
export * from './fatura-hareket/fatura-hareket.component';
export * from './firma-olustur/firma-olustur.component';
export * from './kullanici-olustur/kullanici-olustur.component';
export * from './tum-faturalar/tum-faturalar.component';
export * from './tum-firmalar/tum-firmalar.component';
export * from './tum-kullanicilar/tum-kullanicilar.component';
