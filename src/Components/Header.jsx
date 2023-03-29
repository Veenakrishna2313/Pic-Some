import {Link} from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const Header=()=>{
  return(
    <header className="header">
      <Link to="/" className="links"><h1>Pic Some</h1></Link>   
      <Link to="/cart" className="links"><AddShoppingCartIcon fontSize="large"/></Link>
    </header>
  )
}

export default Header