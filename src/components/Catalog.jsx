import { useEffect, useState } from "react"
import BouquetCard from "./BouquetCard"
import { getFlowers } from "../services/api"

function Catalog(){
  const [flowers,setFlowers] = useState([])
  const [category,setCategory] = useState("all")

  useEffect(()=>{
    getFlowers().then(data=>{
      setFlowers(data)
    })
  },[])

  const filtered = category === "all"
    ? flowers
    : flowers.filter(f => f.category === category)

  return(
    <div>
      <div className="filters">
        <button 
          className={category === "all" ? "active" : ""} 
          onClick={()=>setCategory("all")}
        >
          Все
        </button>
        <button 
          className={category === "bouquets" ? "active" : ""} 
          onClick={()=>setCategory("bouquets")}
        >
          Букеты
        </button>
        <button 
          className={category === "flower_arrangements" ? "active" : ""} 
          onClick={()=>setCategory("flower_arrangements")}
        >
          Цветочные композиции
        </button>
        <button 
          className={category === "toys" ? "active" : ""} 
          onClick={()=>setCategory("toys")}
        >
          Игрушки
        </button>
        <button 
          className={category === "balls" ? "active" : ""} 
          onClick={()=>setCategory("balls")}
        >
          Шары
        </button>
      </div>

      <div className="catalog">
        {filtered.map((flower)=>(
          <BouquetCard key={flower.id} flower={flower}/>
        ))}
      </div>
    </div>
  )
}


export default Catalog