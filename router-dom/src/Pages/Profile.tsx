import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  let navigate = useNavigate()
  return (
   
    <div>
      <h1>Profile</h1>
      <button onClick={() => navigate('/about') }
      >Change to about page</button>
    </div>
  )
}

export default Profile