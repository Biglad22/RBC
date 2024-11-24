import { TeamMember } from "../../types";
import React, { useMemo, useState } from "react";
import { TeamMemberName } from "./teamMemberName";
import { TeamMemberRole } from "./teamMemberRole";
import { TeamMemberAccessExpiry } from "./teamMemberAccessExpiry";
import Button from "../buttons/iconButtons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { deleteUserThunk, updateUserThunk} from '../../redux/usersSlice';


//=========================== COMPONENT CUSTOM TYPES =================================
interface UpdatedMember{
    fullName : string,
    role : string,
    accessExpires : {
        time : string,
        date : string
    } 
}

//================================ MAIN COMPONENT ====================================
// this component displays the information of passed team member 
// it take prop called member which is of type TeamMember (an object containing name, email, role, accessExpiryDate)
export const TeamMemberRow = ({member} : {member : TeamMember}) =>{
    
    //========================= STATE =============================================================
    const {fullName, email, img, role, accessExpires} = member; // destructured team member data

    // isEditing is a boolean value that is toggled on(true) when user clicks on the edit button(pencil button)
    // isEditing tells component to display input fields to enable updating information 
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [updatedInfo, setUpdatedInfo] = useState<UpdatedMember>({fullName:fullName, role:role, accessExpires: accessExpires});    // the follow stores new and updates user info (fullName, role, accessExpires)


    ///access store
    const dispatch = useDispatch<AppDispatch>();

    //========================= FUNCTION ==================================================================
    // handle toggling of isEditing state
    // also handles submission if isEditing is true and any changes have been made
    const handleEditInfo = () => {
        if (isEditing) { // if isEditing is true a post call is mad to the api

            /// since the fake data being used is immutable, this will always return an error
            // dispatch(updateUserThunk({updatedUser:{
            //     ...member, 
            //     fullName: updatedInfo.fullName,
            //     role : updatedInfo.role
            // }, role: 'Admin'}))
            // .unwrap() // Unwrap the promise to directly access payload or throw an error
            // .then((message) => {
            //     console.log(message); // Handle the success message
            //     alert(`User ${email} updated successfully!`);
            // })
            // .catch((error) => {
            //     console.error(error.message); // Handle errors
            //     alert(`Failed to update user: ${error.message}`);
            // });
        };
        setIsEditing(oldValue => !oldValue);    //toggles isEditing value
    }
    

    //gets all the roles
    const roles = useSelector((state: RootState) => state.roles.roles);

    ///checks user role's color
    const getColorCode = useMemo(() =>{
        const targetRole = roles.find(role=> role.name.toLowerCase() === member.role.toLowerCase());
        
        if(!targetRole) return;

        return targetRole?.color;
    }, [role, roles])


    ///handles user deletion
    const deleteUser = (email: string) => {
        if (confirm(`Are you sure you want to delete ${email}?`)) {
            dispatch(deleteUserThunk({ email, role: 'Admin' }))
                .unwrap() // Unwrap the promise to directly access payload or throw an error
                .then((message) => {
                    console.log(message); // Handle the success message
                    alert(`User ${email} deleted successfully!`);
                })
                .catch((error) => {
                    console.error(error); // Handle errors
                    alert(`Failed to delete user: ${error}`);
                });
        }
    };



    // updates email
    const updateFullName = (newValue : string) => {
        if(!newValue) return alert('invalid entry for user name');

        console.log(newValue);
        

        setUpdatedInfo(oldValue => ({...oldValue, fullName: newValue}));
    };
    // updates role
    const updateRole = (newValue : string) => {
        setUpdatedInfo(oldValue => ({...oldValue, role: newValue}));
    }

    return(
        <tr className="max-h-fit ">
            {/* team-member name, img and email displays on the first column */}
            <td
                className={` border-l-2 p-1 py-0 flex items-center truncate`}
                style={{ borderLeftColor: getColorCode }} 
            >
                <img src={img} 
                    alt={`picture of ${fullName}`}
                    className="w-12 h-12 max-[400px]:hidden rounded-sm mr-2 object-cover object-center" 
                />
                <div className="flex-1 truncate">
                    <TeamMemberName 
                        fullName={fullName} 
                        isEditing={isEditing} 
                        updateFullName={updateFullName} 
                    />
                    <a href={'mailto:' + email} className=" block underline px-2 py-0 truncate text-link-l dark:text-link-d">
                        <small>{email}</small>
                    </a>
                </div>
            </td>

            {/*team member role, this will determine badge color to display for the team member*/}
            <td className="text-center p-1">
                <TeamMemberRole 
                    role={role} 
                    isEditing={isEditing} 
                    updateRole={updateRole} 
                />
            </td>

            {/* the date and time team member access expires */}
            <td className="text-center p-1">
                <TeamMemberAccessExpiry 
                    accessExpiry={accessExpires}  
                />
            </td>

            {/* contains the info, edit and delete button */}
            <td className="text-center  p-0.5 flex items-center gap-1 justify-center">
                <Button icon={ !isEditing ? "pencil" : 'check'}  className="text-link-l dark:text-link-d" func={handleEditInfo} /> 
                <Button icon="trash" className="text-delete" func={()=>{deleteUser(email)}}  /> 
            </td>
        </tr>
    )
}