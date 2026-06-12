import { useMutation } from '@apollo/client/react'
import React, { useState } from 'react'
import type{ CreateUserMutation } from '../types/__generated__/graphql'
import { SIGNUP } from '../apollo/mutation'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const [createUser ]=useMutation<CreateUserMutation>(SIGNUP)
    const navigate=useNavigate()
    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault()
        const {data}=await createUser({
            variables:{
                input:{
                    name,email,password
                }
            }
        })
        console.log(data)
        if(data?.createUser.success){
            navigate("/login")
          }
    }

  return (
    <div>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name'/>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter name'/>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter name'/>
    <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Signup
