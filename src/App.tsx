// import { useQuery } from '@apollo/client/react'
// import { GET_ME, GET_USERS } from './apollo/query'
// import type { GetMeQuery, GetUserQuery } from './types/__generated__/graphql'
import Login from './components/Login'
import Post from './components/Post'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import PubRoute from './components/PubRoute'
import Signup from './components/Signup'

const App = () => {


  // const {data,loading}=useQuery<GetMeQuery>(GET_ME)
  // console.log(data)
  // if(loading){
  //   return <p>Loading...</p>
  // }
  return (
    <div>
     <Routes>
      <Route  element={<ProtectedRoute/>}>
      <Route path="/" element={<Post/>}/>
      </Route>

      <Route  element={<PubRoute/>}>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Route>
     </Routes>
    </div>
  )
}

export default App
