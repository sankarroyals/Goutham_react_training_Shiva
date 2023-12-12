import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
const SingleProduct = () => {
    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:4000/products/${id}`).then((res) => {
            setSingleProduct(res.data)
        })
    }, [id])
    const addToCart = () => {
        axios.post(`http://localhost:4000/cart`, singleProduct).then((res) => {
            alert('Item added into the cart')
        })
    }
  return (
      <div style={{display: 'flex', gap: '100px', margin: '10px'}}>
          <div style={{ height: '80vh'}}>
              <img src={singleProduct.image} alt='' style={{height: '100%'}}/>
          </div>
          <div style={{alignSelf: 'center'}}>
              <div style={{fontSize: '65px'}}>{singleProduct.type}</div>
              <div style={{ fontSize: '35px' }}>&#8377;{singleProduct.cost}</div>
              <div>
                  <button style={{ padding: '5px', width: '100%', cursor: 'pointer' }} onClick={addToCart}>Add to cart</button>
              </div>
          </div>
    </div>
  )
}

export default SingleProduct