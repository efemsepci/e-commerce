import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const[menu, setMenu] = useState("shop");

  return (
    <div class='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>Gostil</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration:'none', color: 'black'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("men")}}><Link style={{textDecoration:'none', color: 'black'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("women")}}><Link style={{textDecoration:'none', color: 'black'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("electronics")}}><Link style={{textDecoration:'none', color: 'black'}} to='electronics'>Electronics</Link>{menu==="electronics"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("jewelery")}}><Link style={{textDecoration:'none', color: 'black'}} to='jewelery'>Jewelery</Link>{menu==="jewelery"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
