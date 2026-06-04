import React, { useState,createContext } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

const N1 = createContext();
const N2 = createContext();

function Comp() {
    var [n1, setn1] = useState(0);
    var [n2, setn2] = useState(0);
    
    return (<>
        No1:<input type="text" onChange={(e) => setn1(e.target.value)} /><br></br>
        No2:<input type="text" onChange={(e) => setn2(e.target.value)} />
            <N1.Provider value={n1}>
                <N2.Provider value={n2}>
                    <Comp1></Comp1>
                    <Comp2></Comp2>
                    <Comp3></Comp3>
                </N2.Provider>
            </N1.Provider>
        </>
    );
}

export default Comp;
export { N1,N2}
