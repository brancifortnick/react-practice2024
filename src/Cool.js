import React, { useState } from "react";


const Cool = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [total, setTotal] = useState(0);


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>Count: {count2}</h2>
            <button onClick={() => setCount2(count2 - 1)}>decrement</button>
            <h3>Total: {total}</h3>
            <button onClick={() => setTotal(count + count2)} >Increment</button>

        </div>
    );

}
export default Cool;
