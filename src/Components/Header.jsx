import {Link} from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom'

const Header=()=>{
  return(
    <header className="header">
      <Link to="/" className="links"><h1>Pic Some</h1></Link>      
      <Link to="/cart" className="links"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
    </header>
  )
}

export default Header