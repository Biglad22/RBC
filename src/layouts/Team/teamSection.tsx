import { useEffect, useMemo, useState } from "react";
import { TextDropDown } from "../../components/dropDowns/textDropDown";
import TeamMemberTable from "../../components/teamMember/teamMemberTable";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersThunk} from '../../redux/usersSlice';
import { RootState, AppDispatch } from '../../redux/store';
import LoadingWall from "./loading";

// This is the team section of the member layout, it includes a table of team members
const TeamSection = () => {

  //============= STATES
  const [filter, useFilter] = useState('all');
  //filter is used to pick out users according to their roles

  ///gets all users from state(team members)
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);



  ///fetch users
  useEffect(() => {
      dispatch(fetchUsersThunk('Admin'));
  }, [dispatch]);

  /// filter team list according to filter value
  const filteredUsers = useMemo(()=>{
    if(filter === 'all' || !filter) return users; //  if filter is all or null or undefined it means there is no need to filter outer any user 
    else return users.filter(user => user.role.toLowerCase() === filter.toLowerCase()); // else we get all users whose roles match
  }, [users, filter])


  /// get menu list of all roles
  const roles = useSelector((state: RootState) => state.roles.roles);
  const roleMenu = ()=>{
    const menu :string[] = ['all'];
    roles.forEach(role => menu.push(role.name));

    return menu;
  }

  return (
    <div className="w-full h-full flex flex-col relative">
      {/* Filters and search section */}
      <div className="sticky top-0 z-10 bg-sur-l dark:bg-sur-d left-0 w-full p-4 flex flex-wrap gap-3 items-center">
        <TextDropDown options={roleMenu()} onSelect={useFilter}  className=""/>
      </div>

      {/* Team members table */}
      <div className="flex-1 overflow-auto  custom-scrollbar overflow-x-auto">
        {/* renders loading wall if Api is still loading */}
        {loading ? (<LoadingWall className="h-full" error={error} />)
          :  (
                <TeamMemberTable teamMembers={filteredUsers} className="min-w-fit" />
        )}

      </div>
    </div>
  );
};

export default TeamSection;
