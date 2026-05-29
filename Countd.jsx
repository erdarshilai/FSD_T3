import { useState } from "react";
function Countd() { 
    var [count, setcount] = useState(0);
//    var [count1, setcount] = useState(0);
    return (<>
        <h1>{count}</h1>
        {/* <h2>{ count1}</h2> */}
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px' 
}}onClick={() => { setcount(count=count+18); console.log(count);
        }}>INCREMENT</button>      
        <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px' 
}}onClick={() => { setcount(count=count-18); console.log(count);
        }}>DECREMENT</button>
    </>)
}
export default Countd