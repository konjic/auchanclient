import React, { useState } from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'

function Login() {
  const [username, setUsername] =useState("")
  const [password, setPassword] =useState("")
  const [_,setCookies] = useCookies(["access_token"])

  const navigate = useNavigate()
  const onSubmit = async(event)=>{
    event.preventDefault()
    

    try{
      const response = await axios.post("https://auchanserver.vercel.app/auth/login",{
        username,
        password
      });
      setCookies("access_token", response.data.token)
      window.localStorage.setItem("userId", response.data.userID)
      navigate("/")
    } catch(err){
      console.error(err)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
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

        <button type="submit"> Login </button>
      </form>
    </div>
  )
}

export default Login