import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200">
        <nav className="p-4">
          <ul className="space-y-2">
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/admin" activeClassName="font-bold">
                    Admin Dashboard
                  </NavLink>
                </li>
                {/* Add more admin-specific links */}
              </>
            )}

            {isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard/instructor" activeClassName="font-bold">
                    Instructor Dashboard
                  </NavLink>
                </li>
                {/* Add more instructor-specific links */}
              </>
            )}

            {!isAdmin && !isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard/student" activeClassName="font-bold">
                    Student Dashboard
                  </NavLink>
                </li>
                {/* Add more student-specific links */}
              </>
            )}

            <li>
              <NavLink to="/dashboard/home" activeClassName="font-bold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/profile" activeClassName="font-bold">
                Profile
              </NavLink>
            </li>
            {/* Add more common links */}
          </ul>
        </nav>
      </div>
      <div className="w-3/4 bg-white">
        <header className="p-1 bg-gray-100">
          {/* Add content for the header section */}
          <h1 className='text-center'>SkillSet Dashboard</h1>
        </header>
      <div className=" bg-white border border-green-300">
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
