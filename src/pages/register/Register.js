import React, { useRef } from 'react'
import "./register.css"
import { useUserAuth } from '../../components/Authcontext'
import { useNavigate } from 'react-router-dom'

function Register() {
  const email=useRef("")
  const password=useRef("")
  const {signUp}=useUserAuth()
  const nav=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      await signUp(email.current.value,password.current.value)
      nav("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='registerContainer'>
      <form onSubmit={handleSubmit}>
        <label className='regLbel'>Email </label><br/>
        <input ref={email} className='regInput' type='email'/><br/>
        <label className='regLbel'>Password </label><br/>
        <input ref={password} className='regInput' type='password'/><br/>
        <input className='regInput regButton' type='submit' value="Sign up"/><br/>
      </form>
    </div>
  )
}

export default Register