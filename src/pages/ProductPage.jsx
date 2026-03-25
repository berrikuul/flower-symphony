import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { addToCart } from "../utils/cart"
import { getFlowers } from "../services/api"

function ProductPage(){

const { id } = useParams()
const navigate = useNavigate()

const [product,setProduct] = useState(null)

useEffect(()=>{

getFlowers().then(data=>{
const found = data.find(p => String(p.id) === String(id))
setProduct(found)
})

},[id])

if(!product) return <p>Загрузка...</p>

function handleOrder(){
addToCart(product)
navigate("/cart")
}

return(

<div className="product-page">

<img src={product.image} alt={product.name}/>

<div className="product-details">

<h1>{product.name}</h1>

<p>{product.description}</p>

<h2>{product.price} ₽</h2>

<button onClick={()=>addToCart(product)}>
Добавить в корзину
</button>

<button className="buy-btn-z" onClick={handleOrder}>
Заказать
</button>

</div>

</div>

)

}

export default ProductPage