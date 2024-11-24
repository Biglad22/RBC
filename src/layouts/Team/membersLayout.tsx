import { ChildToggle } from "../../components/teamPageComponents/sectionToggle"
import { TeamSubLinks } from "../../assets/navbarLinks"
import { Outlet } from "react-router-dom"

const MembersLayout = () => {
    return(
        <div className="w-full h-full relative p-6 ">

            {/* top section */}
            <div className=" p-6 pb-4 absolute z-10 top-0 left-0 w-full bg-sur-l dark:bg-sur-d rounded-md">
                <ChildToggle children={TeamSubLinks} parentPath="/members"  />
            </div>
            <div
                className="h-full pt-14"
            >
                <Outlet />
            </div>
        </div>
    )
}

export default MembersLayout
