import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { Helmet } from 'react-helmet';

const Login = () => {



    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    // 
    const [disabled, setDisabled] = useState(true);
    const { signIn, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    // 

    const onSubmit = (data) => {
        // Handle login logic
        console.log(data);
        
        console.log(data.email, data.password);
        
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'User Login successfully!!!',
                  showConfirmButton: false,
                  timer: 1500
              });
                navigate(from, { replace: true });
            }).catch(error => {
              // Error handling for authentication errors
              if (error.code === 'auth/wrong-password') {
                Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Invalid email/password!',
                  showConfirmButton: false,
                  timer: 1500
                });
              } else {
                // Handle other authentication errors
                console.log(error);
    }})
      };
    return (
        <div>
          <Helmet>
                <title>SkillSet | Login</title>
            </Helmet>
             <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
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
          {/* <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
          </div> */}
          <div className="mb-6">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
    Password
  </label>
  <div className="relative">
    <input
      {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="password"
      type={showPassword ? 'text' : 'password'}
      placeholder="Password"
    />
    <div
      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <HiEyeOff /> : <HiEye />}
    </div>
  </div>
  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
</div>
          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-blue-500 text-green-500 hover:bg-blue-900  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/registration"
            >
              Create an account
            </a>
          </div>
        
          <div className="flex items-center justify-center">
            {/* <p className="text-gray-600 text-sm">Or sign in with:</p> */}
         <div>
        
         </div>
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

export default Login;