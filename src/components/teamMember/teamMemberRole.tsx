import React from "react";
import CustomDropdown from "../dropDowns/dynamicDropDown";
import { useSelector } from "react-redux";
import {RootState } from "../../redux/store";

/// handles conditional rendering of role based on the value of isEditing
export const TeamMemberRole: React.FC<{role : string, isEditing : boolean, updateRole : (value: string)=>void}> = ({role, isEditing, updateRole}) =>{
    
    /// get menu list of all roles
    const roles = useSelector((state: RootState) => state.roles.roles);
    const roleMenu = ()=>{
    const menu :string[] = [];
    roles.forEach(role => menu.push(role.name));

    return menu;
  }


    return(
        <>
            {
                !isEditing ?

                //if isEditing is false, component should render fullname as a text, else as the value of input field
                (<p className="block w-full capitalize tracking-wide font-medium text-medium-l dark:text-medium-d p-2"> {role}</p>)
                :(
                    <CustomDropdown label={role} options={roleMenu()} onSelect={updateRole} />
                )
            }
        </>
    )
}
