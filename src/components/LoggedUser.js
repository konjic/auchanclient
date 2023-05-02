import React, { useState, useEffect } from 'react'
import axios from 'axios'

function LoggedUser() {
    const [useData, setData] = useState({})
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'


    useEffect(() => {
        axios.get(url).then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
      },[])
    
    

  return (
    <div>
      <h2> Hello {window.localStorage.getItem("name")  }</h2>
      <h2> Your id is {window.localStorage.getItem("userId")  }</h2>
        <p> Logged in user data</p>
        <p>latitude {useData.latitude}</p>
        <p>longitude {useData.longitude}</p>
        <p>elevation {useData.elevation}</p>
    </div>
  )
}

export default LoggedUser