import React from "react";
import CustomDropdown from "../dropDowns/dynamicDropDown";

/// handles conditional rendering of role based on the value of isEditing
export const TeamMemberRole: React.FC<{role : string, isEditing : boolean, updateRole : (value: string)=>void}> = ({role, isEditing, updateRole}) =>{

    return(
        <>
            {
                !isEditing ?

                //if isEditing is false, component should render fullname as a text, else as the value of input field
                (<p className="block w-full capitalize tracking-wide font-medium text-medium-l dark:text-medium-d p-2"> {role}</p>)
                :(
                    <CustomDropdown label={role} options={['something', 'group', 'fish', 'cate']} onSelect={updateRole} />
                )
            }
        </>
    )
}
