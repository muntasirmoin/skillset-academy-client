import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { motion } from 'framer-motion';
import { MdManageAccounts, MdOutlineManageAccounts } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="flex">
            <div className="w-1/4 bg-gray-200 border-2 border-green-400">
                <nav className="p-4">
                    <ul className="space-y-2">
                        {isAdmin && (
                            <>
                                <li className='text-green-700 hover:text-green-400 uppercase  font-bold'>
                                    <NavLink to="/dashboard" activeClassName="font-bold" >
                                        Admin Dashboard
                                    </NavLink>

                                </li>
                                <hr className='text-red-500' />
                                <li className='hover:text-green-400 font-bold mb-2'>
                                    <NavLink to="/dashboard/manageclasses" activeClassName="font-bold">
                                    <SiGoogleclassroom size={24} className="mr-2" style={{ display: 'inline-block' }} />
      <span style={{ display: 'inline-block' }}>Manage Classes</span>
                                    </NavLink>

                                </li>

                                <li className='hover:text-green-400 font-bold mb-2'>
                                    <NavLink to="/dashboard/allusers" activeClassName="font-bold">
                                    <MdOutlineManageAccounts size={24} className="mr-2" style={{ display: 'inline-block' }} />
      <span style={{ display: 'inline-block' }}>Manage Users</span>
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
                                <li>
                                    <NavLink to="/dashboard/addclass" activeClassName="font-bold">
                                        Add Class
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

                        {/* <li>
              <NavLink to="/dashboard/home" activeClassName="font-bold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/profile" activeClassName="font-bold">
                Profile
              </NavLink>
            </li> */}
                        {/* Add more common links */}
                    </ul>
                </nav>
            </div>
            <div className="w-3/4 bg-white">
                <header className="p-1 bg-gray-100 border-2 border-green-400">
                    {/* Add content for the header section */}
                    {/* <h1 className='text-center'>SkillSet Dashboard</h1> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 2 }}
                        animate={{ opacity: 2, scale: 1 }}
                        transition={{ duration: 3 }}
                    >
                        {/* Your content here */}
                        <h1 className='text-center'>SkillSet Dashboard</h1>
                    </motion.div>
                </header>
                <div className=" bg-white border border-green-300">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
