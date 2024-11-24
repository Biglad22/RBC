import React from "react"
import BoxIcon from "../boxIcon/boxIcon";

/// this is the component for each permission column on the role table
//  if for a particular role, a permission has been assign like to create or write permitted is expected to be true 


//prop types
type RolePermissionType = {
    permitted : boolean,
    isEditing : boolean
}

const RolePermission : React.FC<RolePermissionType> = ({permitted, isEditing}) =>{
    return(
        <>
            {
                !isEditing 
                ?(
                    <div className="h-5 w-5 flex items-center justify-center mx-auto"> 
                        <BoxIcon name={permitted? "check" : "x"} size="sm" className={permitted? "text-green-600" : "text-red-600"}  /> 
                    </div>)
                :(
                    <div className="relative h-5 w-5 mx-auto">
                      <input
                        type="checkbox"
                        name="permit"
                        className="w-full h-full rounded-sm accent-green-600  checked:accent-green-600 cursor-pointer" />
                    </div>
                )
            }
        </>
    )
}

export default RolePermission;