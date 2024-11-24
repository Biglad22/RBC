import { NavBar } from "../components/navComponents/navBar"
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import MembersLayout from "./Team/membersLayout";
import TeamSection from "./Team/teamSection";
import RoleSection from "./Team/roleSection";
import NotFound from "./404";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchRolesThunk } from "../redux/roleSlice";

// main body layout
export const MainBody : React.FC<{className? : string}> = (
    {className} //className is used to to pass additional classes from parent level
)=>{

    // get all roles, since they are used in both team and role table
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchRolesThunk());
    }, [dispatch]);

    return(
        <div className={"max-w-full flex flex-col sm:flex-row items-start gap-4 " + className}>
            <NavBar />
            <div 
                className="flex-1 w-full sm:w-auto sm:max-h-full sm:h-full overflow-hidden block bg-sur-l dark:bg-sur-d rounded-md"
            >
                <Routes>
                    {/* members layout route serves as the index route */}
                    <Route Component={MembersLayout} path="/" >
                        <Route index Component={TeamSection}  /> {/*since the TeamSection of members layout is the index nested route it is also required here */}
                    </Route>

                    {/* members layout route also serves a '/member', to better handle nested routes path */}
                    <Route Component={MembersLayout} path="/members" >
                        <Route index Component={TeamSection}  />
                        <Route Component={RoleSection} path="/members/roles" />
                    </Route>
                    {/* Route for wildcards */}
                    <Route Component={NotFound} path="*" />
                </Routes>
            </div>
            
        </div>
    )
}