import React from "react";
import { AccessExpiryType } from "../../types";
import CalendarDropdown from "../calendars/accessExpiryCalendar";

type TeamMemberAEProps = {
    accessExpiry : AccessExpiryType, 
}
export const TeamMemberAccessExpiry: React.FC<TeamMemberAEProps> = ({accessExpiry}) =>{
    return(
        <>
            {
                // !isEditing ? 
                //if isEditing is false, component should render fullname as a text, else as the value of input field
              
                <div className="w-full p-2 text-medium-l dark:text-medium-d font-medium">
                    <small>{accessExpiry.time}</small>
                    <p className="w-full">{accessExpiry.date}</p>
                </div>
                // )
                // :(
                //     <CalendarDropdown  />
                // )
            }
        </>
    )
}