function Eventsd() { 
    return (<>
        <form onSubmit={f1}>
            username:<input type="text" onChange={f2}></input><br></br>
            <button type="button" onClick={f3}>Click me</button>
            <button type="button" onDoubleClick={f4}>Double click me</button>
            <input type="submit"/>
        </form>
    </>)
}
function f1(e) { 
    e.preventDefault();
    alert("You submitted form");
}
function f2(e) { 
    console.log(e.target.value);
}
function f3() { 
    alert("You clicked once");
}
function f4() { 
    alert("You clicked twice");
}

export default Eventsd