import TopNavItem from "../../components/navigation/TopNavItem.tsx";
import AppLogoIcon from "../../components/app-logo.tsx";

import type {TopNavItem as TopNavItemType} from "../../types/navigation/TopNavItem.ts";
import {NavLink} from "react-router-dom";

export default function TopNavBar() {
    const navItems: TopNavItemType[] = [
        {label: "Home", path: "/"},
        {label: "About", path: "/about"},
        {label: "Contact", path: "/contact"}
    ];

    return <nav className="mb-8 p-4 bg-gray-800 text-white w-full text-center flex items-center">
       <NavLink to="/"> <AppLogoIcon className="size-10 fill-current text-orange-600"/></NavLink>
        <div className="ms-auto p-4 bg-white rounded-full shadow-xl space-x-3 xl:space-x-6">
            {navItems.map((navItem: TopNavItemType, key: number) => (
                <TopNavItem key={key} item={navItem}/>
            ))}
        </div>
    </nav>
}