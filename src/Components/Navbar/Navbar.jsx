import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'><div>Home</div></Link>
            <Link to='/products'><div>Products</div></Link>
            <Link to='/cart'><div>Cart</div></Link>

        </div>
    )
}

export default Navbar