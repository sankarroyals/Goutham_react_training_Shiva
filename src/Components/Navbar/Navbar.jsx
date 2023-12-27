import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faSignOutAlt, faBox } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate();
    const count = useSelector((state) => state.cartS.cart); // get redux variables

    return (
        <div className='navbar'>
            <Link to='/'>
                <div>
                    <FontAwesomeIcon icon={faHome} /> Home
                </div>
            </Link>
            <Link to='/products'>
                <div>
                    <FontAwesomeIcon icon={faBox} /> Products
                </div>
            </Link>
            <Link to='/cart'>
                <div style={{ position: 'relative' }}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                    <div style={{ position: 'absolute', top: '-10px', right: '-14px', background: 'red', borderRadius: '50%', padding: '0px 6px' }}>
                        {count}
                    </div>
                </div>
            </Link>
            <Link onClick={() => {
                localStorage.removeItem('user');
                window.location.href = '/';
            }}>
                <div>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
