import { React, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../../context/Auth/authContext'
import { backendOrigin } from '../../frontend.config.js'
import { loginAction } from '../../context/Auth/authAction.js';

axios.defaults.withCredentials = true;

function LogInModalContent() {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      remember: e.target.elements.remember.value
    };

    try {
      const result = await axios.post(backendOrigin + '/users/signin', formData, { headers: { "Content-Type": "application/json" } })
      if (result.status === 201) {
        dispatch(loginAction(result.data));
      } else {
        console.error('Unexpected status code:', result.status);
      }
    }
    catch (error) {
      console.log(error);

    }
  };

  return (
    <div className='py-6 px-6 lg:px-8 text-left'>
      <h3 className='mb-4 text-xl font-medium text-gray-900'>
        Log In, and plan your next destination!
      </h3>
      <form className='space-y-6' onSubmit={handleLogin}>
        <div>
          <label
            for='email'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Enter Registered Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-orange-500 
            focus:border-orange-500 w-full p-2.5 outline-none'
            placeholder='name@gmail.com'
            required
          />
        </div>
        <div>
          <label
            for='password'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Enter your Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='**********'
            className='bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-orange-500 
            focus:border-orange-500 w-full p-2.5 outline-none'
            required
          />
        </div>
        <div className='flex justify-between'>
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                name='remember'
                type='checkbox'
                value=''
                className='w-4 h-4 bg-gray-50 rounded border
                border-gray-300 focus:ring-3 focus:ring-orange-300'
              />
            </div>
            <label
              for='remember'
              className='ml-2 text-sm font-medium text-gray-900'
            >
              Remember Me
            </label>
          </div>
          <a href='/' className='text-sm text-blue-700 hover:underline'>Forget Passowrd?</a>
        </div>
        <button
          type="submit"
          className='w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 
          focus:outline-none focus:ring-orange-300
          font-medium rounded-lg text-sm px-5 py-2.5 text-center'
        >
          Log In
        </button>
        <label
          for='remember'
          className='ml-2 text-sm font-medium text-gray-900'
        >
          Not Registered? &nbsp;
        </label>
        <a href='/' className='text-sm font-bold text-blue-700 hover:underline'>Create Account</a>
      </form>
    </div>
  )
}
export default LogInModalContent;
