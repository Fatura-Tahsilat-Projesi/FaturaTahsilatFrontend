export interface SBRouteData {
    title?: string;
    activeTopNav?: string;
    breadcrumbs: Breadcrumb[];
}

export interface Breadcrumb {
    text: string;
    link?: string;
    active?: boolean;
}

export interface SideNavItems {
    [index: string]: SideNavItem;
}

export interface SideNavCompanyItems {
    [index: string]: SideNavCompanyItem;
}

export interface SideNavEmployeeItems {
    [index: string]: SideNavEmployeeItem;
}
export interface SideNavItem {
    icon?: string;
    text: string;
    link?: string;
    submenu?: SideNavItem[];
}

export interface SideNavCompanyItem {
    icon?: string;
    text: string;
    link?: string;
    submenu?: SideNavItem[];
}

export interface SideNavEmployeeItem {
    icon?: string;
    text: string;
    link?: string;
    submenu?: SideNavItem[];
}
export interface SideNavSection {
    text?: string;
    items: string[];
}

export interface SideNavCompanySection {
    text?: string;
    items: string[];
}

export interface SideNavEmployeeSection {
    text?: string;
    items: string[];
}