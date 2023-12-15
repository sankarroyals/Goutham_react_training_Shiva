import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faList } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'><FontAwesomeIcon icon={faHome} /> Home</Link>
            <Link to='/products'><FontAwesomeIcon icon={faList} /> Products</Link>
            <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /> Cart</Link>
        </div>
    );
}

export default Navbar;
