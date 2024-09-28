import React, {useState} from 'react';
export default function State() {
    const [count,setCount] = useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click me to increment</button>
            <button onClick={()=>setCount(count-1)}>Click me to decrement</button>
            <h1>Current value of count is {count}</h1>
        </div>
    )
}