import { SideNavItems, SideNavSection } from '../models';

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
                link: '/dashboard/faturalarim',
            },
            {
                text: 'Fatura Oluştur',
                link: '/dashboard/yenifatura',
            },
            {
                text: 'Fatura Düzenle',
                link: '/dashboard/faturadetay',
            }
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
