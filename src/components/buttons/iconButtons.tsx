import React from "react"
import BoxIcon from "../boxIcon/boxIcon"


//this is a button of icon 
// button props
type ButtonProps = {
    icon? : string, // icon of the button
    title? : string, //the title of the button
    className? : string, //additional classes for button
    color? : string,    //color of icon or text 
    func? : ()=>void   //function button should call
}

const Button : React.FC<ButtonProps> = ({icon, title, className, func}) =>{

    //dummy function, if func is undefined
    const dummyFunc = () =>alert('button does nothing');
    
    return(
        <button type="button"
            className={"flex gap-1 items-center px-1.5 py-1.5 pb-1 transition-all duration-200 ease-in-out " + (className || '')}
            onClick={func || dummyFunc}
        >
            {title && 
                (<span className={"pb-0.5 " + (icon ? "hidden  lg:block" : "block")}>{title}</span>)
            }
            {
                icon &&
                (<BoxIcon name={icon} size="sm"  />)
            }
            {
                !title && !icon &&
                (<span className="block pb-0.5">button</span>)
            }
        </button>
    )
}

export default Button