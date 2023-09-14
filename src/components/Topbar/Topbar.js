import React from 'react'
import "./topbar.css"
import { useUserAuth } from '../Authcontext'
import { useNavigate } from 'react-router-dom'

function Topbar() {
  const {logOut,user}=useUserAuth()
  const nav=useNavigate()
  const logOutHandler=async()=>{
    try {
      await logOut()
      nav("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='topbarContainer'>
      <div className='topbar'>
        <h5 className='text'>Welcome -{user.email}</h5>
        <button onClick={logOutHandler} className='btn'>Log Out</button>
      </div>
    </div>
  )
}

export default Topbar