import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='navbar'>
            <Link to='/'><div>Home</div></Link>
            <Link to='/products'><div>Products</div></Link>
            <Link to='/cart'><div>Cart</div></Link>
            <Link onClick={() => {
                localStorage.removeItem('user')
                navigate('/login')
            }}><div>Logout</div></Link>


        </div>
    )
}

export default Navbar