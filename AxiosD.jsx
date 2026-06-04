import { useState, useEffect } from "react";
import axios from 'axios';
function AxiosD() { 
    var [im, setim] = useState(null);
    var [s, sets] = useState("");
    var [p, setp] = useState("");
    var [il, setil] = useState(null);


    
    useEffect(() => { 
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then((r) => setim(r.data.message))
            .catch((e) => console.log(e));
    }, []);
    useEffect(() => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then((r1) => {
                sets(r1.data.setup);
                setp(r1.data.punchline)
            })
            .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        setInterval(() => {
            axios.get("https://api.thecatapi.com/v1/images/search")
                .then((r2) => setil(r2.data.url))
                .catch((e) => console.log(e));
        }, 5000);
    }, []);

    return (<>
        <img src={im} alt="Aniket"></img>
        <h1>{s}</h1>
        <h1>{p}</h1>
        <img src={il} alt="Aniket"></img>
    </>)
}
export default AxiosD