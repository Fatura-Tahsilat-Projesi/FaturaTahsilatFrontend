import { SideNavItems, SideNavSection } from '../../models';
import { AppRoutingModule } from '../../app/app-routing.module';
export const sideNavSections: SideNavSection[] = [
    {
        text: 'Ana Sayfa',
        items: ['dashboard'],
    },
    {
        text: 'İşlemler',
        items: ['layouts', 'pages'],
    },
    {
        text: 'Profil',
        items: ['charts', 'tables'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Ana Sayfa',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Fatura İşlemleri',
        submenu: [
            {
                text: 'Faturalarımı Listele',
                link: 'faturalarim',
            },
            {
                text: 'Fatura Oluştur',
                link: 'yenifatura',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Profil Ayarları',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Hesap Bilgileri',
        link: '/tables',
    },
};
