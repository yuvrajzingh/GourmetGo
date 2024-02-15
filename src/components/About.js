import React from 'react'
import UserClass from './UserClass'
import User from './User'

const About = () => {
  return (
    <div>
      <h1>About</h1>

      <UserClass name={"Yuvraj"} location={"ALLD"}/>
      {/* <User name={"Yuvraj"} location={"ALLD"}/> */}
  
    </div>
  )
}

export default About