import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSignIn, user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email, photoURL:loggedInUser.photoURL }
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `User google login successfully!!!`,
                            showConfirmButton: false,
                            timer: 1800
                        });
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
             <div>
            <div className="divider"></div>
            <div className="w-full text-center">
            <button 
            onClick={handleGoogleSignIn}
             className="btn btn-circle btn-outline">
               <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
        </div>
    );
};

export default SocialLogin;