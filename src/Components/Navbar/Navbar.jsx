import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import Cart_Icon from '../assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/Context';

const Navbar = () => {
    const [menu, setmenu] = useState("shop");
    const {getTotalCartItem} = useContext(ShopContext)
  return (
    <div className='Navbar'>
     <div className="Nav_logo">
       <img src={logo} alt='logo' /> 
       <p>SHOPPER</p>
     </div>
     <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}} > <Link to='/' style={{textDecoration : 'none'}}>Shop</Link> {menu === "shop" ? <hr/> : null } </li>
        <li onClick={()=>{setmenu("Men")}} > <Link to='mens' style={{textDecoration : 'none'}}>Men</Link> {menu === "Men" ? <hr/> : null }  </li>
        <li onClick={()=>{setmenu("Women")}} > <Link to='womens' style={{textDecoration : 'none'}}>Women</Link> {menu === "Women" ? <hr/> : null }  </li>
        <li onClick={()=>{setmenu("Kids")}} > <Link to='kids' style={{textDecoration : 'none'}}>kids</Link> {menu === "Kids" ? <hr/> : null }  </li>
     </ul>
     <div className="nav-login-cart">
       <Link to='/login'> <button>Login</button></Link>
      <Link to='/cart'><img src={Cart_Icon} alt="" /></Link>  
        <div className='nav-cart-counter'>{getTotalCartItem()}</div>
     </div>
    </div>
  )
}

export default Navbar
