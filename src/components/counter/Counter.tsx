import React, { useState } from 'react';
import styles from './Counter.module.scss'
export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    return (
        <div className={styles.counter}>
            {counter}
            <button onClick={() => setCounter(counter => counter+1)}>Increase</button>
        </div>
    );
};