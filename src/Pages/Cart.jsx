import { useContext } from "react"
import CartItem from "../Components/CartItem";
import {Context} from "../Context"

const Cart=()=>{
 
  const {cartItems, ordering, ordered}=useContext(Context);
  const totalCost=5.99*cartItems.length;
  const cost=5.99;
  const CartItemElements=cartItems.map(item=>{
   return <CartItem key={item.id} cost={cost} item={item}/>
  })



  return (
    <div className="cart-page">
      <h1>Check out</h1>
        {CartItemElements} 
      <p className="total-cost">Total: {totalCost.toLocaleString('en-US', { style: 'currency', currency: "USD" })}</p>  
      <div className="order-button">
          {cartItems.length?<button onClick={ordering}>{ordered?"Ordering...":"Place Order"}</button>:""}
      </div>
    </div>
  )
}


export default Cart