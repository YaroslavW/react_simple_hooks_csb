import React, {useState} from 'react';

const UseState_1 = () => {
    const [age, setAge] = useState(0);
    const handleIncrease = () => setAge( age + 1);
    return(
        <div>
        <p>My age now is - {age} year old!</p>
        <button onClick={handleIncrease}>Grow</button>
        </div>
    )
} 
export default UseState_1;