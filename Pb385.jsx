import React, { useState, useEffect } from "react";

function Pb385() {
  var [count, setCount] = useState(0);
  var [status, setStatus] = useState(false);
  useEffect(() => {
    let interval;
    if (status) {
        interval=setInterval(() => {
        setCount(++count);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status]);
    
  return (<>
      <h1>Counter: {count}</h1>
      <button onClick={() => setStatus(true)}>Start</button>
      <button onClick={() => setStatus(false)}>Stop</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
export default Pb385;