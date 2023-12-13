import React from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const SinglecartItem = ({ d, setData, data}) => {
    const navigate = useNavigate()
    const deleteFromcart = () => {
        axios.delete(`http://localhost:4000/cart/${d.id}`).then((res) => {
            alert('Item deleted successFully')
            setData(data.filter((db)=>d.id !== db.id))
        })
    }
    return (
        <div style={{ border: '1px solid gray', padding: '5px' }}>
            <div>
                <img src={d.image} alt='' height={150} />
            </div>
            <div>{d.type}</div>
            <div><b>{d.count}</b> items in the cart</div>
            <div>&#8377;{d.cost}</div>
            <button onClick={() => navigate(`/product/${d.id}`)} style={{cursor: 'pointer' }}>Go to Product</button>
            <button onClick={deleteFromcart} style={{marginLeft: '5px', cursor: 'pointer'}}>Delete</button>
        </div>
    )
}

export default SinglecartItem