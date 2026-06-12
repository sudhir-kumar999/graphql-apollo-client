import { useQuery } from '@apollo/client/react'
import React from 'react'
import { GET_ME } from '../apollo/query'
import type { GetMeQuery } from '../types/__generated__/graphql'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const {data,loading,error}=useQuery<GetMeQuery>(GET_ME)
    console.log(data)
    // const navigate=useNavigate()
    if(loading){
    return <p>Loading...</p>
  }
  if(error){
    console.log(error)
  }
    if(!data?.getMe){
    return <Navigate to="/login" replace />;
    }
  return (
    <Outlet/>
  )
}

export default ProtectedRoute
