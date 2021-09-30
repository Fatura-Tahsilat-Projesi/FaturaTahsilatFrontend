import { SideNavItems, SideNavSection } from '../models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'Ana Sayfa',
        items: ['dashboard'],
    },
    {
        text: 'İşlemler',
        items: ['layouts'],
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
    {
        text: 'Firma İşlemler',
        items: ['firma'],
    },
];

export const sideNavCompanySections: SideNavSection[] = [
    {
        text: 'Ana Sayfa',
        items: ['dashboard'],
    },
    {
        text: 'Firma İşlemler',
        items: ['firma'],
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
                text: 'Fatura Öde',
                link: '/dashboard/faturaodeme',
            },
            {
                text: 'Fatura Hareketleri',
                link: '/dashboard/faturahareketleri',
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
        link: '/dashboard/ayarlar',
    },
    tables: {
        icon: 'table',
        text: 'Hesap Bilgileri',
        link: '/dashboard/hesapbilgilerim',
    },
    admin: {
        icon: 'book-open',
        text: 'Admin',
        submenu: [
            {
                text: 'Faturalar',
                submenu: [
                    {
                        text: 'Tüm Faturalar',
                        link: '/dashboard/faturalar',
                    },
                    {
                        text: 'Yeni Fatura Oluştur',
                        link: '/dashboard/yenifatura',
                    },
                    {
                        text: 'Tüm Fatura Hareketler',
                        link: '/dashboard/faturahareketleri',
                    }
                ],
            },
            {
                text: 'Firmalar',
                submenu: [
                    {
                        text: 'Tüm Firmalar',
                        link: '/dashboard/firmalar',
                    },
                    {
                        text: 'Yeni Firma Oluştur',
                        link: '/dashboard/yenifirma',
                    }
                ],
            },
            {
                text: 'Kullanıcılar',
                submenu: [
                    {
                        text: 'Tüm Kullanıcılar',
                        link: '/dashboard/kullanicilar',
                    },
                    {
                        text: 'Yeni Kullanıcı Oluştur',
                        link: '/dashboard/yenikullanici',
                    },
                    {
                        text: 'Roller',
                        link: '/dashboard/roller',
                    }
                ],
            }
        ],
    },
    firma: {
        icon: 'book-open',
        text: 'Firma',
        submenu: [
            {
                text: 'Faturalar',
                submenu: [
                    {
                        text: 'Tüm Faturalar',
                        link: '/dashboard/faturalar',
                    },
                    {
                        text: 'Yeni Fatura Oluştur',
                        link: '/dashboard/yenifatura',
                    },
                    {
                        text: 'Tüm Fatura Hareketler',
                        link: '/dashboard/faturahareketleri',
                    }
                ],
            },
            {
                text: 'Firmalar',
                submenu: [
                    {
                        text: 'Tüm Firmalar',
                        link: '/dashboard/firmalar',
                    },
                    {
                        text: 'Yeni Firma Oluştur',
                        link: '/dashboard/yenifirma',
                    }
                ],
            },
            {
                text: 'Kullanıcılar',
                submenu: [
                    {
                        text: 'Tüm Kullanıcılar',
                        link: '/dashboard/kullanicilar',
                    },
                    {
                        text: 'Yeni Kullanıcı Oluştur',
                        link: '/dashboard/yenikullanici',
                    },
                    {
                        text: 'Roller',
                        link: '/dashboard/roller',
                    }
                ],
            }
        ],
    },

};


export const sideNavCompanyItems: SideNavItems = {
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
                text: 'Fatura Öde',
                link: '/dashboard/faturaodeme',
            },
            {
                text: 'Fatura Hareketleri',
                link: '/dashboard/faturahareketleri',
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
        link: '/dashboard/ayarlar',
    },
    tables: {
        icon: 'table',
        text: 'Hesap Bilgileri',
        link: '/dashboard/hesapbilgilerim',
    },
    firma: {
        icon: 'book-open',
        text: 'Firma',
        submenu: [
            {
                text: 'Faturalar',
                submenu: [
                    {
                        text: 'Tüm Faturalar',
                        link: '/dashboard/faturalar',
                    },
                    {
                        text: 'Yeni Fatura Oluştur',
                        link: '/dashboard/yenifatura',
                    },
                    {
                        text: 'Tüm Fatura Hareketler',
                        link: '/dashboard/faturahareketleri',
                    }
                ],
            },
        ],
    },

};
