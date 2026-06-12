import { useQuery } from '@apollo/client/react'
import type { GetMeQuery } from '../types/__generated__/graphql'
import { GET_ME} from '../apollo/query'
import { Navigate, Outlet } from 'react-router-dom'

const PubRoute = () => {
    const {data,loading,error}=useQuery<GetMeQuery>(GET_ME)
       if(loading){
    return <p>Loading... pub</p>
  }
  if(error){
    console.log(error)
  }
    if(data?.getMe){
    // navigate("/dashboard")
    return <Navigate to="/" replace />;
    }
  return (
    <Outlet/>
  )
}

export default PubRoute
