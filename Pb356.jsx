import { useState } from "react";
function Pb356() {
    var [txt, settxt] = useState("LJ University")
    var [txt2, settxt2] = useState("React JS Hooks")
    var [clr, setclr] = useState("red")
    var [btntxt, setbtntxt] = useState("Hide")
    return (<>
        <h1 style={{ color: clr }}>{txt}</h1>
        <p>{txt2}</p>
        <button onClick={f1}>change text</button>
        <button onDoubleClick={f2}>change color</button>
        <button onClick={f}>{btntxt}</button>
    </>)

    function f1() {
        if (txt == "LJ University")
            settxt("Welcome Students")
        else
            settxt("LJ University")
    }
    function f2() {
        if (clr == "red")
            setclr("blue")
        else
            setclr("red")
    }
    function f() {
        if (btntxt == "Hide") {
            setbtntxt("Show")
            settxt2("")
        }
        else {
            setbtntxt("Hide")
            settxt2("React JS Hooks")
        }
    }
}
export default Pb356