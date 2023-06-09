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
        <div className="text-xl font-bold">Website Name</div>
        <ul className="flex space-x-4">
          <li>
            <Link to='/'><a href="#" className="hover:text-white">Home</a></Link>
            
          </li>
          <li>
            <a href="#" className="hover:text-white">Instructors</a>
          </li>
          <li>
          <Link to='approveclass'> <a href="#" className="hover:text-white">Classes</a></Link> 
          </li>
          {user ? (
            <li className="flex items-center space-x-2">
              <a href="#" className="hover:text-white">Dashboard</a>
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
           
              <button  onClick={handleLogOut} className="border border-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-300">
                Logout
              </button>
            </li>
          ) : (
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