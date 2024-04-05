import React from 'react'
import {useLocation} from 'react-router-dom'
function PageNotFound() {
    let location = useLocation()
    console.log('location of the page',location);
  return (
    <div>
      <h1>Sorry the {location.pathname} page does not exist</h1>
    </div>
  )
}

export default PageNotFound
