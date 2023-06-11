import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {
    const { register, handleSubmit,reset, formState: { errors }, watch  } = useForm();

    const { user, createUser, signIn, logOut, updateUserProfile, loading} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
      // Handle registration logic
      console.log(data);
      createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email , photoURL: data.photoUrl }
                    
                        fetch('http://localhost:3000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully!!!',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };


    const password = watch('password');

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
              {...register('password', { 
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
                // pattern: { value: /(?=.*[A-Z])/, message: 'Password must contain at least one capital letter' },
                pattern: { value: /(?=.*\W)(?=.*[!@#$&*])(?=.*[A-Z])/, message: 'Password must contain at least one special character & one capital letter' }
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
       
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) => value === password || 'Passwords do not match'
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
              Photo URL
            </label>
            <input
              {...register('photoUrl')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photoUrl"
              type="text"
              placeholder="Photo URL"
            />
          </div>
         
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-green font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <a
              className="ms-5 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/login"
            >
              Already have an account!
            </a>
          </div>
        </form>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex items-center justify-center">
            <p className="text-gray-600 text-sm">Or sign in with</p>
            </div>
 <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Registration;