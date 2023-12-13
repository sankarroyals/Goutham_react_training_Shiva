import React from 'react'
import { useNavigate } from 'react-router'

const Product = ({ d }) => {
    const navigate = useNavigate()
    return (
        <div style={{border: '1px solid gray', padding: '5px'}}>
            <div>
                <img src={d.image} alt='' height={150} />
            </div>
            <div style={{fontWeight: '600'}}>{d.type}</div>
            <div>{d.cost}</div>
            <button onClick={()=> navigate(`/product/${d.id}`)} style={{background:'orange',borderRadius: '15px', border: 'none', padding: '10px', width:'200px'}}><b>Go to Product</b></button>

        </div>
    )
}

export default Product