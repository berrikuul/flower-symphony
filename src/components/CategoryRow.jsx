import { useEffect, useState, useRef } from "react"
import BouquetCard from "./BouquetCard"
import { getFlowers } from "../services/api"

function CategoryRow({ title, category }) {

const [items, setItems] = useState([])
const scrollRef = useRef(null)

useEffect(() => {
  getFlowers().then(data => {
    const filtered = data.filter(i => i.category === category)
    setItems(filtered)
  })
}, [category])

// 🔥 функция скролла
const scroll = (direction) => {
  const container = scrollRef.current
  const scrollAmount = 300

  if(direction === "left"){
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
  } else {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }
}

return(

<section className="category-section">

<h2>{title}</h2>

<div className="category-wrapper">

<button 
  className="scroll-btn left"
  onClick={() => scroll("left")}
>
  ←
</button>

<div className="category-row" ref={scrollRef}>
  {items.map((item)=>(
    <BouquetCard key={item.id} flower={item}/>
  ))}
</div>

<button 
  className="scroll-btn right"
  onClick={() => scroll("right")}
>
  →
</button>

</div>

</section>

)

}

export default CategoryRow