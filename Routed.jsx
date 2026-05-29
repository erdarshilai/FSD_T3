import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homed from './Homed.jsx'
import Contactd from './Contactd.jsx'
import Aboutd from './Aboutd.jsx'
import Products from './Products.jsx'
import Nopage from "./Nopage.jsx";
function Routed() { 
    return (<>
        <BrowserRouter>
            <Link to="/">HOME</Link>
            <Link to="/aboutd">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/products">PRODUCTS</Link>
            <Routes>
                <Route path="/" element={<Homed />}></Route>
                <Route path="/aboutd" element={ <Aboutd />}></Route>
                <Route path="/contact" element={ <Contactd />}></Route>
                <Route path="/products" element={ <Products />}></Route>
                <Route path="*" element={ <Nopage />}></Route>
            </Routes>
        </BrowserRouter>
    </>)
}
export default Routed