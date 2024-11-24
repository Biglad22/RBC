import { Link } from "react-router-dom"
import React from "react"

// user profile button at the topNav bar, it takes user to the user profile page at click
// it include user name and profile picture

//========== PROP TYPE
type UserProfileProps = {
    name: string, 
    img: string
}

// ================ MAIN COMPONENT ===============================================
const UserProfile: React.FC<UserProfileProps> = ({name, img}) =>{

    return(
        <Link to='/dashboard'
            className="text-link-l dark:text-link-d capitalize font-medium flex items-center gap-1"
        >
            <h5 className="max-[400px]:hidden">
                {name}
            </h5>
            <img src={img} 
                alt={'this is' + name}
                className="w-8 h-8 object-cover object-center rounded-full" 
            />
        </Link>
    )
}

export default UserProfile