import React, { useState } from 'react';
import './Counter.scss'

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    return (
        <div>
            {counter}
            <button onClick={() => setCounter(counter => counter+1)}>Increase</button>
        </div>
    );
};