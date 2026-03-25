import { Link } from "react-router-dom"

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

<div className="footer-column">

<h3>Цветочная симфония</h3>

<p>
Свежие букеты и подарки  
для любого события
</p>

</div>

<div className="footer-column">

<h4>Навигация</h4>

<Link to="/">Главная</Link>
<Link to="/catalog">Каталог</Link>
<Link to="/delivery">Доставка</Link>

</div>

<div className="footer-column">

<h4>Контакты</h4>

<p>8 (952) 503-07-29</p>
<p>8 (999) 587-31-60</p>
<a href="https://vk.ru/flower_simphony" target="_blank" rel="noopener noreferrer">VK: @flower_simphony</a>
<a href="https://t.me/flower_simphony_1" target="_blank" rel="noopener noreferrer">Tg: @flower_simphony_1</a>

<p>
г. Челябинск, Сосновский район,
ТК Северный, 1
</p>

<p>
10:00 – 21:00
</p>

</div>

</div>

<div className="footer-bottom">

<p>© 2026 Цветочная симфония</p>

</div>

</footer>

)

}

export default Footer