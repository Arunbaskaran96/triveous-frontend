import React, { useRef } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../components/Authcontext'

function Login() {
  const email=useRef("")
  const password=useRef("")
  const nav=useNavigate()
  const {logIn}=useUserAuth()

  const formSubmit=async(e)=>{
    e.preventDefault()
    try {
      await logIn(email.current.value,password.current.value)
      nav("/homepage")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='loginContainer'>
        <form onSubmit={formSubmit}>
            <label className='loginLabel'>Email </label><br/>
            <input ref={email} className='loginInput' type='email'/><br/>
            <label  className='loginLabel'>Password </label><br/>
            <input ref={password}  className='loginInput'  type='password'/><br/>
            <input  className='loginInput loginSubmit'  type='submit' value="Log in"/>
        </form>
        <div>
            <Link to="/register" className=' loginReg'>Register</Link>
        </div>
    </div>
  )
}

export default Login