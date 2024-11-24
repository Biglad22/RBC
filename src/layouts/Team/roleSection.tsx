import Button from "../../components/buttons/iconButtons";
import React from "react";
import { TeamRole } from "../../components/teamRole/teamRole";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// this is a component of the table of all team Member 
type TableProps ={
    className? : string  //additional classes for table
}

const CRUD = ['create', 'read', 'update', 'delete'] // all possible permissions for any role

///========================  MAIN COMPONENT
const RoleSection:React.FC<TableProps>  = ({className}) => {

    /// get all roles
    const roles = useSelector((state: RootState) => state.roles.roles);

    return(
        <div className="h-full overflow-auto  custom-scrollbar">
            <table
                className={"p-2 w-full max-w-full max-h-auto rounded-sm border-spacing-2 border-low-l dark:border-low-l table-fixed border-collapse relative " + (className || '')}
            >
                <thead>
                    <tr className="text-high-l dark:text-high-d bg-sur-l dark:bg-sur-d sticky top-0 left-0">
                        <th className="text-left p-2 min-w-[30vw] w-[30vw] sm:min-w-[10%]   sm:w-[10%] font-normal">Name</th>

                        <th className="text-center p-2 min-w-[30vw] w-[30vw] sm:min-w-[10%]   sm:w-[10%] font-normal">Color</th>

                        {/* role permissions */}
                        { CRUD.map(perm => (<th className="text-center p-2 capitalize min-w-[30vw] w-[30vw] sm:min-w-[10%]   sm:w-[10%] font-normal">
                            {perm}
                        </th>))}
                        
                        <th className="text-center p-2 min-w-[30vw] w-[30vw] sm:min-w-[10%]   sm:w-[10%] font-medium">
                            <Button icon="cross" title="Add Role" className=" rounded-full bg-primary hover:bg-primary-rxn text-medium-l hover:text-high-l mx-auto" />
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {/* map through roles */}
                    {roles.map( role => (<TeamRole  role={role}  />))}
                </tbody>
                        
            </table>
        </div>
    )
}

export default RoleSection;