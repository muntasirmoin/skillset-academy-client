import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { motion } from 'framer-motion';
import { MdManageAccounts, MdOutlineManageAccounts, MdOutlineWorkHistory } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { BsDatabaseAdd } from 'react-icons/bs';
import { FaSchool, FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import { AiOutlineLogout ,AiOutlineFileDone} from 'react-icons/ai';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsFileEarmarkCheck } from 'react-icons/bs';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user, logOut } = useContext(AuthContext);
    const profileImage = user?.photoURL;
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div className="flex mb-5">
            <div className="w-1/4 bg-gray-200 border-2 border-green-400">
                <nav className="p-4">
                    <ul className="space-y-2">
                        {isAdmin && (
                            <>
                                <li className='text-green-700 hover:text-green-400 uppercase  font-bold'>
                                    <NavLink to="/dashboard/counter" activeClassName="font-bold" >
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
                                <li className='text-green-700 hover:text-green-400 uppercase  font-bold'>
                                    <NavLink to="/dashboard/counter" activeClassName="font-bold">
                                        Instructor
                                    </NavLink>
                                </li>
                                <hr className='text-red-500' />
                                <li className='hover:text-green-400 font-bold mb-2'>
                                    <NavLink to="/dashboard/addclass" activeClassName="font-bold">
                                        <BsDatabaseAdd size={24} className="mr-2" style={{ display: 'inline-block' }} />
                                        <span className='text-center' style={{ display: 'inline-block' }}>Add Class</span>
                                    </NavLink>
                                </li>

                                <li className='hover:text-green-400 font-bold mb-2'>
                                    <NavLink to="/dashboard/myclasses" activeClassName="font-bold">
                                        <FaSchool size={24} className="mr-2" style={{ display: 'inline-block' }} />
                                        <span className='text-center' style={{ display: 'inline-block' }}>My Classes</span>
                                    </NavLink>
                                </li>
                                {/* Add more instructor-specific links My Classes */}
                            </>
                        )}

                        {!isAdmin && !isInstructor && (
                            <>
                                <li className='text-green-700 hover:text-green-400 uppercase  font-bold'>
                                    <NavLink to="/dashboard/counter" activeClassName="font-bold">
                                        Student Dashboard
                                    </NavLink>
                                </li>
                                <hr className='text-red-500' />

                                <li className='text-green-700 hover:text-green-400 uppercase  font-bold'>
                                    <NavLink to="/dashboard/mycart" activeClassName="font-bold">
                                    <BsFileEarmarkCheck size={24} className="mr-2" style={{ display: 'inline-block' }} ></BsFileEarmarkCheck>   My Selected Classes 
                                    </NavLink>
                                </li>
                                <li className='text-green-700 hover:text-green-400 uppercase  font-bold'>
                                    <NavLink to="/dashboard/myenroll" activeClassName="font-bold">
                                    <AiOutlineFileDone size={24} className="mr-2" style={{ display: 'inline-block' }}></AiOutlineFileDone>    My Enroll Classes
                                    </NavLink>
                                </li>
                                <li className='text-green-700 hover:text-green-400 uppercase  font-bold'>
                                    <NavLink to="/dashboard/paymenthistory" activeClassName="font-bold">
                                  <MdOutlineWorkHistory size={24} className="mr-2" style={{ display: 'inline-block' }}></MdOutlineWorkHistory>      Payment History
                                    </NavLink>
                                </li>
                                {/* Add more student-specific links */}
                            </>
                        )}
                        <hr className='text-green-500' />
                        <li>
                            <li className='text-green-700 hover:text-green-400 uppercase  font-bold'>
                                <NavLink to="/" activeClassName="font-bold">
                                 <TiArrowBackOutline size={24} className="mr-2 text-green-400" style={{ display: 'inline-block' }}></TiArrowBackOutline>Home 
                                </NavLink>
                            </li>
                        </li>

                        {/* Add more common links */}
                        <hr className='text-red-500' />
                        <li>
                            <button onClick={handleLogOut} className=" btn btn-sm btn-outline btn-warning" style={{ fontSize: '20px' }}>
                                <span className='text-red-400'>Logout</span> <AiOutlineLogout size={24} className="mr-2 text-red-400" style={{ display: 'inline-block' }}></AiOutlineLogout>
                            </button>
                        </li>

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
                        <h1 className='text-center font-extrabold '>SkillSet Dashboard</h1>
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
