import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProductModal from "./ProductModal"

function BouquetCard({ flower }) {

const [open,setOpen] = useState(false)
const navigate = useNavigate()

return (

<>

<div className="card" onClick={() => setOpen(true)}>

<img src={flower.image} alt={flower.name} />

<h3>{flower.name}</h3>

<h4>{flower.price} ₽</h4>

<button
onClick={(e) => {
e.stopPropagation()
navigate("/product/" + flower.id)
}}
>
Заказать
</button>

</div>

{open && (
<ProductModal
flower={flower}
close={() => setOpen(false)}
closeModal={() => setOpen(false)}
/>
)}

</>

)

}

export default BouquetCard