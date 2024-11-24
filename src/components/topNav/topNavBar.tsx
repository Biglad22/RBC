import Logo from "./logo";
import React from "react";
import UserProfile from "./userProfile";
import ThemeSwitch from "../switches/themeSwitch";
import testImg from "../../assets/img.jpg";


type TopNavProps = {
    className?: string
}

// this is the top bar that includes app logo, theme switch and user profile button
const TopNavBar : React.FC<TopNavProps> = ({className}) =>{
    return(
        <nav className={"flex gap-5 justify-between items-center w-full " + (className || '')}>
            <Logo />
            <span
                className="flex gap-5 items-center w-fit"
            >
                <UserProfile img={testImg} name="emmanuel" key="emmanuel" />
                <span className="max-[400px]:hidden"><ThemeSwitch /></span>
            </span>
        </nav>
    )
} 

export default TopNavBar