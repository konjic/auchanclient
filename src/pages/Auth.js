import React from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import {useCookies} from 'react-cookie'

function Auth() {
  const [cookies,setCookies] = useCookies(["access_token"])

  return (
    <div>
        {/* <Register/>
        <Login/> */}

        {!cookies.access_token? (<div><Register/>
        <Login/></div>) 
    : 
    (<div> <h2> Hello {window.localStorage.getItem("name")  }. You are already logged in  </h2></div>)}

    </div>
  )
}

export default Auth