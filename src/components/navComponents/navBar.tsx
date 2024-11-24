import { navBarLinks } from "../../assets/navbarLinks"
import { NavLinkTag } from "./navLink"

//nav bar for page navigation
export const NavBar = () =>{
    return(
        <nav className="bg-sur-l dark:bg-sur-d w-full justify-center sm:justify-start sm:w-fit sm:min-w-fit md:w-1/6 rounded-md flex sm:flex-col gap-1.5 px-1.5 py-3 items-stretch h-fit sm:h-full sm:max-h-full">
            {
                navBarLinks.map(({title, to, icon}) => (<NavLinkTag to={to} title={title} icon={icon} key={title} />))
            }
        </nav>
    )
}