import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = ({isLoggedIn,userProfilePicture}) => {
    // const isLoggedIn = a;
    const { user, logOut } = useContext(AuthContext);
    const profileImage = user?.photoURL;
    const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
  }
    return (
        <nav className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
      <div className="mb-6 md:mb-0">
              <a  className="flex items-center">
                  <img src="https://i.ibb.co/6DbzzTn/istockphoto-953461340-612x612.jpg" className="h-10 mr-3 w-10 rounded-full" alt="Skill SetLogo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SkillSet Academy</span>
              </a>
          </div>
        <ul className="flex space-x-4">
          <li>
            <Link to='/'><a href="#" className="hover:text-white">Home</a></Link>
            
          </li>
          {/* instructorAll */}
          <li>
            <Link to='instructorAll'><a href="#" className="hover:text-white">Instructors</a></Link>
            
          </li>
          <li>
          <Link to='approveclass'> <a href="#" className="hover:text-white">Classes</a></Link> 
          </li>
          {user ? <>
            <li className="flex items-center space-x-2">
              {/* dashboard */}
              <Link to='/dashboard/counter'><a href="#" className="hover:text-white">Dashboard</a></Link>
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
           
              <button  onClick={handleLogOut} className="border border-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-300">
                Logout
              </button>
            </li>
            </>     : (
            <li>
                <Link to='/login'><button className="border border-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-300">
                login
              </button></Link>
              
            </li>
          )}
        </ul>
      </div>
    </nav>
    );
};

export default NavBar;