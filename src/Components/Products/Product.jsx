import React from 'react'
import { useNavigate } from 'react-router'

const Product = ({ d }) => {
    const navigate = useNavigate()
    return (
        <div style={{border: '1px solid gray', padding: '5px'}}>
            <div>
                <img src={d.image} alt='' height={150} />
            </div>
            <div>{d.type}</div>
            <div>{d.cost}</div>
            <button onClick={()=> navigate(`/product/${d.id}`)}>Go to Product</button>

        </div>
    )
}

export default Product