import { useState } from 'react'
export const useCounter = (initialState = 1) => {
 
    const [first, setfirst] = useState(initialState);

    const increment = ()=>{
        setfirst(first + 1 );
    }

    const decrement = ()=>{
        setfirst(first - 1 );
    }

    const reset = ()=>{
        setfirst(initialState);
    }

    return {
        first,
        increment,
        decrement,
        reset
    }

}
