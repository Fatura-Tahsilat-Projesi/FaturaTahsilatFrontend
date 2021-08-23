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
        //items: ['charts', 'tables'],
    },
    {
        text: 'Yönetim Sekmesi',
        items: ['admin'],
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
            },
            {
                text: 'Fatura Öde',
                link: '/dashboard/faturaodeme',
            }
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Sayfalar',
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
    admin: {
        icon: 'book-open',
        text: 'Admin',
        submenu: [
                    {
                        text: 'Tüm Faturalar',
                        link: '/dashboard/faturalarim',
                    },
                    {
                        text: 'Yeni Fatura Tipi Oluştur',
                        link: '/auth/register',
                    },
                    {
                        text: 'Kullanıcılar',
                        link: '/auth/forgot-password',
                    },
        ],
    },


};
