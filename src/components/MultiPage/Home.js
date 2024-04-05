import React from 'react'
import {useParams} from 'react-router-dom'
function Home() {
    let {name} = useParams()
  return (
    <div>
      <h1>This is home page. I am {name}</h1>
    </div>
  )
}

export default Home
