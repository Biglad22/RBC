import React, { useState } from "react";
import { TeamMemberName } from "../teamMember/teamMemberName"; // TeamMemberName can be reused for role title
import Button from "../buttons/iconButtons";
import RolePermission from "./teamRolePermission";
import RoleColor from "./teamRoleColor";


const CRUD = ["create", 'read', 'update', 'delete'] ///to manage map through role permissions

interface RoleType{
    name : string,
    color: string,
    permissions: { //CRUD permissions 
        create : boolean,
        read : boolean,
        update : boolean,
        delete : boolean
    }, 
    new? : boolean //new prop is used for newly create instances
}

//================================ MAIN COMPONENT ====================================
// this component displays the information of passed team member 
// it take prop called member which is of type TeamMember (an object containing name, email, role, accessExpiryDate)
export const TeamRole = ({role} : {role : RoleType}) =>{

    //========================= STATE =============================================================
    const {name, color, permissions} = role; // destructured team member data

    // isEditing is a boolean value that is toggled on(true) when user clicks on the edit button(pencil button)
    // isEditing tells component to display input fields to enable updating information 
    const [isEditing, setIsEditing] = useState<boolean>(false); 
    const [updatedInfo, setUpdatedInfo] = useState<RoleType>({name:name, color: color, permissions : permissions});    // the follow stores new and updates user info (fullName, role, accessExpires)



    //========================= FUNCTION ==================================================================
    // handle toggling of isEditing state
    // also handles submission if isEditing is true and any changes have been made
    const handleEditInfo = () => {
        if (isEditing) { // if isEditing is true a post call is mad to the api
            /*TODO: submission logic*/ 
        };
        setIsEditing(oldValue => !oldValue);    //toggles isEditing value
    }

    // updates email
    const updateName = (newValue : string) => setUpdatedInfo(oldValue => ({...oldValue, name: newValue}));
    // updates role
    const updateColor = (newValue : string) => setUpdatedInfo(oldValue => ({...oldValue, color: newValue}));
    // updates accessExpiry
    const updatePermission = (newValue : string) => setUpdatedInfo(oldValue => ({...oldValue, email: newValue}));

    return(
        <tr className="h-max mt-2">
            {/* team-member name, img and email displays on the first column */}
            <td
                className={` p-2 text-left  truncate`} 
            >
                <TeamMemberName 
                    fullName={name} 
                    isEditing={isEditing} 
                    updateFullName={updateName} 
                />
            </td>


            {/* the date and time team member access expires */}
            <td className="text-center p-2">
                <RoleColor color={color} isEditing={isEditing} />
            </td>

            {/* permissions column */}
            {
                CRUD.map((perm : string) => (
                    <td className="text-center p-2">
                        <RolePermission isEditing={isEditing} 
                        permitted={permissions[perm as keyof RoleType["permissions"]]}  
                        key={perm} />
                    </td>
                ))

            }

            {/* contains the info, edit and delete button */}
            <td className="text-center p-1.5 flex items-center gap-1 justify-center">
                <Button icon={ !isEditing ? "pencil" : 'check'} className="text-link-l dark:text-link-d" func={handleEditInfo} /> 
                <Button icon="trash" className="text-delete" /> 
            </td>
        </tr>
    )
}