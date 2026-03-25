import { useEffect, useState } from "react"
import BouquetCard from "./BouquetCard"
import { getFlowers } from "../services/api"

function Featured(){

const [flowers,setFlowers] = useState([])

useEffect(()=>{

getFlowers().then(data=>{

const popular = data.filter(f => f.featured === "1")
setFlowers(popular)

})

},[])

return(

<div>

<h2 style={{textAlign:"center", marginTop:"40px"}}>
Популярные букеты
</h2>

<div className="catalog">

{flowers.map((flower)=>(
<BouquetCard key={flower.id} flower={flower}/>
))}

</div>

</div>

)

}

export default Featured