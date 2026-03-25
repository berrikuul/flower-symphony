import { addToCart } from "../utils/cart"
import { useNavigate } from "react-router-dom"

function ProductModal({flower,close, closeModal}){

const navigate = useNavigate()

return(

<div className="modal-overlay" onClick={close}>

<div className="product-modal" onClick={(e)=>e.stopPropagation()}>
    <button className="modal-close" onClick={closeModal}>
  ✕
</button>

<img src={flower.image} alt={flower.name}/>

<div className="product-info glass-card">

<h2>{flower.name}</h2>

<p>{flower.description}</p>

<h3>{flower.price} ₽</h3>

<div className="product-actions">

<button
className="add-cart-btn"
onClick={()=>addToCart(flower)}
>
Добавить в корзину
</button>

<button
className="buy-btn"
onClick={()=>navigate("/product/" + flower.id)}
>
Купить сейчас
</button>

</div>

</div>

</div>

</div>

)

}

export default ProductModal