import {Link} from "react-router-dom"
import React from 'react';
import { useContext} from "react";
import {Context} from "../Context"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header=()=>{

const {cartItems}=useContext(Context);

const CartImage=cartItems.length>0?<Link to="/cart" className="links"><AddShoppingCartIcon fontSize="large"/></Link>:<Link to="/cart" className="links"><ShoppingCartIcon fontSize="large"/></Link>;

  return(
    <header className="header">
      <Link to="/" className="links"><h1>Pic Some</h1></Link>   
      {CartImage}
    </header>
  )
}

export default Header