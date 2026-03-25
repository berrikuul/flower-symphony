import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CatalogPage from "./pages/CatalogPage"
import Delivery from "./pages/Delivery"
import About from "./components/About"
import Footer from "./components/Footer"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"

import { Routes, Route } from "react-router-dom"

function App(){

return(

<div className="app-wrapper">
<Navbar/>

<div className="main-content">

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/catalog" element={<CatalogPage/>} />

<Route path="/delivery" element={<Delivery/>} />

<Route path="/about" element={<About/>} />

<Route path="/product/:id" element={<ProductPage/>}/>

<Route path="/cart" element={<CartPage/>}/>

</Routes>

</div>

<Footer/>

</div>

)

}

export default App