import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { Context } from '../Context';

const CartItem=({item,cost})=>{

  const {removeFromCart}=useContext(Context);
  
   return(
    <div className="cart-item">
        <DeleteIcon onClick={()=>removeFromCart(item.id)} fontSize="large"/>
        <img className="cart-img"src={item.url}/>
        <h2>${cost}</h2>

    </div>
  )
}

CartItem.propTypes={
  item: PropTypes.shape({
    url:PropTypes.string.isRequired,
      })
}
 
export default CartItem;