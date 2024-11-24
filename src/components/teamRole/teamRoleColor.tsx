import React from "react"
import BoxIcon from "../boxIcon/boxIcon";

/// this is the component for each color column on the role table


//prop types
type RoleColorType = {
    color : string,
    isEditing : boolean
}

const RoleColor : React.FC<RoleColorType> = ({color, isEditing}) =>{
    return(
        <>
            {
                !isEditing 
                ?(<div className="h-5 w-5 rounded-sm flex items-center justify-center mx-auto " style={{ backgroundColor: color }}></div>)
                :(
                    <div className=" h-5 w-5 mx-auto rounded-sm flex items-center justify-center">
                      <input
                        type="color"
                        name="permit"
                        className="w-full h-full rounded-sm border-2 p-0 border-low-l dark:border-low-l cursor-pointer custom-color-picker" />
                    </div>
                )
            }
        </>
    )
}

export default RoleColor;