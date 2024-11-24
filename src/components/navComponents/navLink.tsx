import React from "react";
import { NavLink } from "react-router-dom";
import { LinkType } from "../../types";
import BoxIcon from "../boxIcon/boxIcon";

// NavLink isActive type
type isActType = {
    isActive: boolean;
}

//=================== MAIN COMPONENT =============================================
// navLink handles navigation through web pages
export const NavLinkTag: React.FC<LinkType & { icon: string }> = ({ title, to, icon }) => {
    return (
        <>
            <NavLink
                to={to}
                className={({ isActive }: isActType) => {
                    const baseClasses = 'px-3 py-2 flex items-center gap-2 w-fit md:w-full border-b-4 sm:border-b-0 border-l-0 sm:rounded-b-md sm:border-l-4 sm:rounded-l-md';
                    const activeClasses = 'border-primary dark:border-primary-rxn text-primary-rxn';
                    const inactiveClasses = 'border-transparent text-link-l dark:text-link-d';
                    const iconVisibility = icon !== 'group' ? 'max-[400px]:hidden' : 'block';
                
                    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${iconVisibility}`;
                }}
            >
                <BoxIcon name={icon} size="sm" />
                <p className="capitalize font-regular hidden md:block">{title}</p>
            </NavLink>

        </>
    );
}

