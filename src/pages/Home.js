import React from 'react'
import {useCookies} from 'react-cookie'
import LoggedUser from '../components/LoggedUser'

function Home() {
  const [cookies,setCookies] = useCookies(["access_token"])
 

  

  return (
    // <div>Please login to see data</div>
    <div>

    {!cookies.access_token? (<div>Please login to see data</div>) 
    : 
    (<LoggedUser/>)}
    </div>
        
  )
}

export default Home