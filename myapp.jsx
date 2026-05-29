function MyApp() {
    const name = "Greyninja"
    const mystyle = { color: "blueviolet" }
    var n = "lju";
    import img from "./assets/download.png"
    return (
        <>
            <div>
                <img src={img} width="200" />
                <li>The BEST </li>
                <h1>{n}</h1>
                <h1>"{n}"</h1>
                <h1>{"{n}"}</h1>
                <h1>{n + "test"}</h1>
                <h1>{n.toUpperCase()}</h1>
                <h1>{5 + 5}</h1>
                <h1>{[1, 2, 3]}</h1>
                <h1>{[1, 2, 3].join(",")}</h1>
            </div>
        </>
    )
}
export default MyApp