import Button from "../buttons/iconButtons";
import React from "react";
import { TeamMemberRow } from "./teamMember";
import { TeamMember } from "../../types";



// this is a component of the table of all team Member 
type TableProps ={
    className? : string  //additional classes for table
    teamMembers: TeamMember[]
}
const TeamMemberTable:React.FC<TableProps>  = ({className, teamMembers}) => {

    return(
        <div> 
            <table
                className={"p-2 sm:w-full max-h-auto rounded-sm border-spacing-2  table-fixed border-collapse relative " + (className || '')}
            >
                <thead>
                    <tr className="text-high-l dark:text-high-d sticky top-0 left-0 bg-sur-l dark:bg-sur-d">
                        <th className="text-left p-2   min-w-[40vw] w-[40vw] sm:min-w-[40%]  sm:w-[40%]  font-normal">Name</th>
                        <th className="text-center p-2  min-w-[40vw] w-[40vw] sm:min-w-[40%]   sm:w-[20%] font-normal">Role</th>
                        <th className="text-center p-2  min-w-[40vw] w-[40vw] sm:min-w-[40%]  sm:w-[20%] font-normal">
                          Access Expires
                        </th>
                        <th className="text-center p-2  min-w-[40vw] w-[40vw] sm:min-w-[40%]  sm:w-[20%] font-medium">
                            <Button icon="cross" title="Add Member" className=" rounded-full bg-primary hover:bg-primary-rxn text-high-l mx-auto" />
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {teamMembers.map((member, index) => (<TeamMemberRow member={member} key={member.fullName + index} />  ))}         
                </tbody>
            </table>
        </div>           
    )
}

export default TeamMemberTable;