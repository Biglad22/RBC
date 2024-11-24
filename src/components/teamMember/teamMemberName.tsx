import React, {useEffect, useState} from "react"

type TeamMemberNameProps = {
    fullName : string, 
    isEditing : boolean,
    updateFullName : (newValue : string)=>void
}


/// handles conditional rendering of fullname based on the value of isEditing
export const TeamMemberName:React.FC<TeamMemberNameProps> = ({fullName, isEditing, updateFullName}) =>{

    //====== STATES
    /// this store the value of inputfield
    const [currentInputValue, setInputValue] = useState(fullName); 

    /// if the value isEditing changes then the currentInputValue is changed to fullname;
    // this way at every point we switch modes values are in sync
    useEffect(()=> setInputValue(fullName),[isEditing]);


    //===== FUNCTION
    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        if(updateFullName) updateFullName(e.target.value);    
        setInputValue(e.target.value);
    }

    return(
        <>
            {
                !isEditing ? 
                //if isEditing is false, component should render fullname as a text, else as the value of input field
                (<p className="block w-full truncate capitalize text-left border-2 border-transparent font-medium px-2 py-0.5 mb-0.5 text-high-l dark:text-high-d "> {fullName}</p>)
                :(
                    <input 
                        type="text" 
                        name="new-full-name" 
                        className="w-full px-2 py-0.5 mb-0.5 rounded-sm block bg-transparent font-medium capitalize text-high-l dark:text-high-d border-2 border-low-l dark:border-low-d focus:border-medium-l dark:focus:border-medium-d focus:outline-none caret-high-l dark:caret-high-d transition-all duration-300 ease-in-out "
                        value={currentInputValue}
                        onChange={handleInputChange}
                    />
                )
            }
        </>
    )
}