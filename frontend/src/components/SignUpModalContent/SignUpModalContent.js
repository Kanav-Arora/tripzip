import React, { useState } from 'react';

function SignUpModalContent() {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === passwordConfirmation);
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Check if the passwords match before submitting the form
  //   if (password === passwordConfirmation) {
  //     // todo Perform form submission logic here
  //   } else {
  //     // todo: alert show an error message
  //     console.log('Passwords do not match');
  //   }
  // };

  return (
    <div className='py-6 px-6 lg:px-8 text-left'>
      <h3 className='mb-4 text-xl font-medium text-gray-900'>
        Sign Up, and plan your next destination!
      </h3>
      <form className='space-y-6' action='#'>
        <div className='flex space-x-4'>
          <div className='w-1/2'>
            <label
              htmlFor='first_name'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              First Name
            </label>
            <input
              type='text'
              name='first_name'
              id='first_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 
              text-sm rounded-lg focus:ring-orange-500 
              focus:border-orange-500 w-full p-2.5 outline-none'
              placeholder='First Name'
              required
            />
          </div>
          <div className='w-1/2'>
            <label
              htmlFor='last_name'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Last Name
            </label>
            <input
              type='text'
              name='last_name'
              id='last_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 
              text-sm rounded-lg focus:ring-orange-500 
              focus:border-orange-500 w-full p-2.5 outline-none'
              placeholder='Last Name'
              required
            />
          </div>
        </div>
        <div>
          <label
            for='email'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Your Email
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
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Your Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='**********'
            className='bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-orange-500 
            focus:border-orange-500 w-full p-2.5 outline-none'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor='passwordConfirmation'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Confirm Password
          </label>
          <input
            type='password'
            name='passwordConfirmation'
            id='passwordConfirmation'
            placeholder='**********'
            className={`bg-gray-50 border ${passwordsMatch ? 'border-green-500' : 'border-red-500'
              } text-gray-900 text-sm rounded-lg focus:ring-orange-500 
            focus:border-orange-500 w-full p-2.5  outline-none`}
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
            required
          />
        </div>
        <div className='flex justify-between'>
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                value=''
                className='w-4 h-4 bg-gray-50 rounded border
                border-gray-300 focus:ring-3 focus:ring-orange-300'
                required
              />
            </div>
            <label
              for='remember'
              className='ml-2 text-sm font-medium text-gray-900'
            >
              Remember Me
            </label>
          </div>
          <a href='/' className='text-sm text-blue-700 hover:underline'>Already a user?</a>
        </div>
        <button
          type="submit"
          className='w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 
          focus:outline-none focus:ring-orange-300
          font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          disabled={!passwordsMatch}
        >
          Create Account
        </button>
      </form>
    </div>
  )
}
export default SignUpModalContent;
