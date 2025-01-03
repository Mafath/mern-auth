import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { use } from 'react';


export default function Profile() {
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector(state => state.user)
  const [profilePic, setProfilePic] = useState(currentUser.profilePicture);

  const handleFileUpload = async(event) => {
    try {
      const file = event.target.files[0];

      if(!file) return;
      setLoading(true);

      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'first_time_cloudinary');
      data.append('cloud_name', 'dsarwhki4');

      const res = await fetch("https://api.cloudinary.com/v1_1/dsarwhki4/image/upload", {
        method: 'POST',
        body: data,
      })

      const uploadedImageURL = await res.json();
      console.log(uploadedImageURL.url);
      setProfilePic(uploadedImageURL.url);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    
  }




  return (
    <div className='p-3 lg:max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input onChange={handleFileUpload} type='file' ref={fileRef} hidden accept='image/*'/>
        <img className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2' src={profilePic} alt='profile' onClick={() => fileRef.current.click()} />

        <p className='text-green-500 text-sm self-center'>{loading ? "image uploading..." : ""}</p>

        <input defaultValue={currentUser.username} type='text' id='username' placeholder='Username' className='bg-slate-100 rounded-lg p-3' />
        <input defaultValue={currentUser.email} type='email' id='email' placeholder='Email' className='bg-slate-100 rounded-lg p-3' />
        <input type='password' id='password' placeholder='Password' className='bg-slate-100 rounded-lg p-3' />

        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}
