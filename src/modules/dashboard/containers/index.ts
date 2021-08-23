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
export const containers = [DashboardComponent, StaticComponent, LightComponent, FaturaDuzenleComponent, DashboardLayoutComponent, FaturaOlusturComponent, FaturaListeleComponent, FaturaOdeComponent, FooterComponent, AyarlarComponent];

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