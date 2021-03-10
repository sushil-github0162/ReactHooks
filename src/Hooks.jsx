import React, { useState } from 'react';

const Hooks = () => {
    //const state = useState; 
    let curr_time;
    curr_time = new Date();
    console.log(curr_time.toLocaleTimeString());
    const [count, SetCount] = useState(0);
    const [currenttime, ShowCurrTime] = useState()
    const incNum = () => {
        SetCount(count + 1);
    }

    const SetTime = () =>
    {
        ShowCurrTime(curr_time.toLocaleTimeString());
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incNum}>Click Me 👍</button>
            <h1>{currenttime}</h1>
            <button onClick={SetTime}>Get Time 👍</button>
        </div>
    );
}

export default Hooks;