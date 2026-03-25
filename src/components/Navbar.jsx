import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

function Navbar(){

const [menuOpen, setMenuOpen] = useState(false)
const menuRef = useRef()

useEffect(() => {
  function handleClickOutside(e){
    if(menuRef.current && !menuRef.current.contains(e.target)){
      setMenuOpen(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])

return(

<nav className="navbar">

<div className="logo">
<img src="/img/logo2.jpg" alt="Цветочная симфония"/>
</div>


<div 
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</div>

<ul ref={menuRef} className={`nav-links ${menuOpen ? "active" : ""}`}>

<li><Link to="/" onClick={() => setMenuOpen(false)}>Главная</Link></li>
<li><Link to="/catalog" onClick={() => setMenuOpen(false)}>Каталог</Link></li>
<li><Link to="/delivery" onClick={() => setMenuOpen(false)}>Доставка</Link></li>
<li><Link to="/about" onClick={() => setMenuOpen(false)}>О нас</Link></li>
<li><Link to="/cart" onClick={() => setMenuOpen(false)}>Корзина</Link></li>

</ul>

</nav>

)

}

export default Navbar