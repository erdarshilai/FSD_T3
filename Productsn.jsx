function Productsn(p) { 
    return (<div style={{ border: "4px solid red", textAlign: "center", justifyContent: "center", margin: "5px" }}>
        <h1>{p.pname}</h1>
        <img src={ p.img}/>
        <h4>price:{p.price}</h4>
        <button onClick={() => alert("added")}> Add to cart </button>


    </div>)

}
export default Productsn