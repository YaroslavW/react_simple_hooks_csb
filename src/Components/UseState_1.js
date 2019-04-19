import React, {useState} from 'react';

const UseState_1 = () => {
    const [age, setAge] = useState(0);
    const [siblings, setSiblings] = useState(0);
    const handleIncrease = () => setAge( age + 1);
    const handleIncrSiblings = () => setSiblings( siblings + 1);
    const clearAge = () => setAge(0);
    const clearSiblings = () => setSiblings(0);
    return(
        <div>
        <p>My age now is - {age} year old!</p>
        <p>I have {siblings} siblings</p>
        <button onClick={handleIncrease}>Grow</button>
        <button onClick={clearAge}>Clear age</button>
        <button onClick = {handleIncrSiblings}>Add Siblings</button>
        <button onClick={clearSiblings}>Clear siblings</button>
        </div>
    )
} 
export default UseState_1;