import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SignIn() {

  const [formData, setFormData] = useState({}); //state.slice name
  const {loading, error} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  }


  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data); // errors nttn output ek :- message: "User created successfully" / error thibboth output ek :- middleware eke tyn eka
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }

  };

  // A POST request is sent to http://localhost:3000/api/auth/signup.(but here we are sending data from 5173 to 3000. So we r using a proxy)
  // The request contains the user's signup data (e.g., username, email, password) in the body.
  // The server processes the request, creates a new user, and sends a response back from the backend(e.g., a success message("User created successfully")).
  // res contains the server’s response, which can then be processed (e.g., show a success message on the frontend).


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='email' className='bg-slate-100 border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type='password' placeholder='password' className='bg-slate-100 border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign in'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error ? error || 'Something went wrong!' : ''}</p>
      {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
    </div>
  );
}
