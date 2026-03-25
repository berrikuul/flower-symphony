import CategoryRow from "../components/CategoryRow"
import Featured from "../components/Featured"
function Home(){

return(

<div>

<section className="hero">

<h1>Свежие букеты с доставкой</h1>

<p>Подарите эмоции вместе с нашими цветами</p>


</section>

<CategoryRow title="Букеты" category="bouquets"/>

<CategoryRow title="Цветочные композиции" category="flower_arrangements"/>

<CategoryRow title="Игрушки" category="toys"/>

<CategoryRow title="Шары" category="balls"/>

<Featured/>


</div>

)

}

export default Home