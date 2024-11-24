import React from "react"
import { Link } from "react-router-dom"
import { LinkType } from "../../types"
import { useLocation } from "react-router-dom"

//  component props type
type childToggleProps = {
    children : [LinkType, LinkType],
    parentPath : string // since nested routes have to have a path that include all parents path
    //parent path should start with '/'
}

//TODO: fix link activity

// helps toggle between team route children routes
export const ChildToggle: React.FC<childToggleProps> = ({children, parentPath}) =>{
    
    //access current path
    const curPath = useLocation().pathname
    
    return(
        <div
            className=" w-fit rounded-xl shadow-sm flex overflow-hidden font-medium"
        >
            {/* some link classes are set on the condition of what the current path (curPath ends with) */}
            {children.map(({to, title}) => (
                <Link to={parentPath + to}  key={title}
                    className={`capitalize  py-1 ${curPath.endsWith(to) ? 'px-6 bg-primary text-high-l' : ' px-2 text-link-l bg-light dark:bg-dark'}`}
                >{title}</Link>
            ))}
        </div>
    )
} 