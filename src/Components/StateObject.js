import React, { useState } from 'react'

const StateObject = () => {
 const [state, setState] = useState({age: 12, siblings: 0})
const handleClick = value =>
  setState({
      ...state,
      [value]: state[value] + 1
  })
    const handleClear = (value) =>
        setState({
            ...state,
            [value]: 0
        })
 const {age, siblings} = state
 return (
     <div>
     <p>I have {age} year old!</p>
     <button onClick={handleClick.bind(null, 'age')}>Grow</button>
     <button onClick={handleClear.bind(null, 'age')}>0</button>
     <p>I have {siblings} - siblings.</p>
     <button onClick={handleClick.bind(null, 'siblings')}>Add siblings</button>
     <button onClick={handleClear.bind(null, 'siblings')}>0</button>
     </div>
 )
}
export default StateObject;