import { MainBody } from "./layouts/mainBody"
import TopNavBar from "./components/topNav/topNavBar"

export const App = () => {
    return(
        <div 
            className="w-[100vw] h-[100vh] bg-light dark:bg-dark px-10 py-5 flex flex-col gap-5 relative"
        >
            <TopNavBar className="sticky z-50 top-5 left-10 w-full " />
            <MainBody className="flex-1 overflow-auto" />
        </div>
    )
}