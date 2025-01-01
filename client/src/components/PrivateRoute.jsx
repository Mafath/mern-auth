import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const {currentUser} = useSelector(state => state.user);
  return (
    currentUser ? <Outlet /> : <Navigate to='/sign-in' />
  )
}

// when there is a currentUser we are gonna show the children(in our case it's profile)
// If there is no currentUser we gonna navigate to the sign in page