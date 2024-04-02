import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(100)
    function decrementCounter(){
        setCount(count-1)
    }
    function incrementCounter(){
        setCount(count+1)
    }

  return (
    <div>
      <div>{count}</div>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button>
    </div>
  )
}

export default Counter
