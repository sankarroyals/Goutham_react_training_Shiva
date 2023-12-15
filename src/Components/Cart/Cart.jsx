import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SinglecartItem from './SingleCartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/cart`).then((res) => {
            setData(res.data)
        })
    }, [])

    return (
        data.length > 0 ? <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', width: '900px', margin: 'auto', marginTop: '10px' }} >
            {data.map((d) => (
                <SinglecartItem d={d} setData={setData} data={data} 
                    
                    />
            ))}
        </div> : <div style={{marginTop: '50px'}}>Oops,...No items in your cart, Please go to Products and add your items</div>
    )
}

export default Cart