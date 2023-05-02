import React, { useState } from 'react'
import axios from 'axios'

function Register() {

  const [username, setUsername] =useState("")
  const [password, setPassword] =useState("")
  const [name, setName] =useState("")
  const [email, setEmail] =useState("")

  const onSubmit = async(event)=>{
    event.preventDefault()
    

    try{
      await axios.post("https://auchanserver.vercel.app/auth/register",{
        username,
        password
      });
      alert("Registration completed")
    } catch(err){
      console.error(err)
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Register</h1>
        <div>
          <label htmlFor='username'> Name </label>
          <input
          type="text"
          id="name"
          onChange={(event)=>setName(event.target.value)}
          value={name}
          />
        </div>

        <div>
          <label htmlFor='username'> Email </label>
          <input
          type="email"
          id="email"
          onChange={(event)=>setEmail(event.target.value)}
          value={email}
          />
        </div>

        <div>
          <label htmlFor='username'> Username </label>
          <input
          type="text"
          id="username"
          onChange={(event)=>setUsername(event.target.value)}
          value={username}
          />
        </div>

        <div>
          <label htmlFor='password'> Password </label>
          <input
           type="password"
           value={password}
           id="password"
           onChange={(event)=>setPassword(event.target.value)}
           />
        </div>

        <button type="submit"> Register </button>
      </form>
    </div>
  )
}

export default Register