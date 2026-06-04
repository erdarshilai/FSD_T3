import { useContext } from "react";
import { N1,N2 } from "./Comp.jsx";

function Comp1() {
    var n1 = parseInt(useContext(N1));
    var n2 = parseInt(useContext(N2));
  return (
    <div>
          <h1>ADDITION OF {n1} & {n2} is {n1 + n2}</h1>
    </div>
  );
}
export default Comp1;
