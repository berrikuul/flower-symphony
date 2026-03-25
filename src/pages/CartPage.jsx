import { useEffect, useState } from "react"
import { getCart, removeFromCart } from "../utils/cart"

function CartPage(){
  const [cart,setCart] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)  // ← состояние модалки
  const [modalVisible, setModalVisible] = useState(false) // ← видимость модалки

  useEffect(()=>{
  const raw = getCart()
  updateCart()
  const grouped = Object.values(
    raw.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = { ...item, quantity: 1 }
      } else {
        acc[item.id].quantity += 1
      }
      return acc
    }, {})
  )

  setCart(grouped)
},[])

function updateCart(){
  const raw = getCart()

  const grouped = Object.values(
    raw.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = { ...item, quantity: 1 }
      } else {
        acc[item.id].quantity += 1
      }
      return acc
    }, {})
  )

  setCart(grouped)
}

function increase(item){
  const newCart = [...getCart(), item]
  localStorage.setItem("cart", JSON.stringify(newCart))
  updateCart()
}

function decrease(item){
  const current = getCart()
  const index = current.findIndex(i => i.id === item.id)

  if(index !== -1){
    current.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(current))
    updateCart()
  }
}

function removeAll(item){
  const filtered = getCart().filter(i => i.id !== item.id)
  localStorage.setItem("cart", JSON.stringify(filtered))
  updateCart()
}

  function handleRemove(index){
    removeFromCart(index)
    setCart(getCart())
  }

  function openModal(item) {
    setSelectedItem(item)
    setModalVisible(true)
  }

  function closeModal() {
    setModalVisible(false)
    setSelectedItem(null)
  }

  const total = cart.reduce(
  (sum, item) => sum + Number(item.price) * item.quantity,
  0
)

  if(cart.length === 0){
    return <div className="cart-empty">Корзина пуста</div>
  }

  return(
    <>
      <div className="cart-page">
        <h1>Ваш заказ</h1>

        <div className="cart-list">
          {cart.map((item)=>(
              <div className="cart-item" key={item.id}>

  <img src={item.image} alt={item.name}/>

  <div className="cart-info">
    <h3>{item.name}</h3>
    <p>
      {item.price * item.quantity} ₽ 
      <span style={{color:"#6b7280"}}>
        {" "}({item.price} ₽/шт.)
      </span>
    </p>
  </div>

  <div className="cart-actions">
    <div className="quantity">
      <button onClick={() => decrease(item)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => increase(item)}>+</button>
    </div>

    <button 
      className="remove-btn"
      onClick={() => removeAll(item)}
    >
      Удалить
    </button>
  </div>

</div>
            ))}
        </div>

        <div className="cart-summary">
          <h2>Итого: {total} ₽</h2>
          <button className="checkout-btn">
            Оформить заказ
          </button>
        </div>
      </div>


      {modalVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
              {selectedItem && (
                <>
                  <img src={selectedItem.image} alt={selectedItem.name}/>
                  <div className="product-info glass-card">
                    <h2>{selectedItem.name}</h2>
                    <p>{selectedItem.description}</p>
                    <div className="product-price">{selectedItem.price} ₽</div>
                    <div className="product-category">Категория: {selectedItem.category}</div>

                    <div className="product-actions">
                      <button 
                        className="add-cart-btn"
                        onClick={closeModal}
                      >
                        Продолжить покупки
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
        </div>
      )}
    </>
  )
}

export default CartPage
