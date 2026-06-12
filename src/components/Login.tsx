import { useMutation } from '@apollo/client/react'
import React, { useState } from 'react'
import { LOGIN } from '../apollo/mutation'
import type { LoginUserMutation } from '../types/__generated__/graphql'
import { useNavigate } from 'react-router-dom'

const Login = () => {
      const [email,setEmail]=useState("")
      const [password,setPassword]=useState("")
  const navigate=useNavigate()
      const [loginUser ]=useMutation<LoginUserMutation>(LOGIN)
  
      async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
          e.preventDefault()
          const {data}=await loginUser({
              variables:{
                  input:{
                      email,password
                  }
              }
          })
          console.log(data)
          if(data?.loginUser?.success){
            navigate("/")
          }
      }
  
    return (
      <div>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter name'/>
          <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter name'/>
      <button type='submit' >Submit</button>
        </form>
      </div>
    )
}

export default Login
