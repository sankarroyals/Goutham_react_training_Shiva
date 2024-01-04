import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { changeCartCount, updatedCart } from '../../redux/Cart/CartReducer'
const SingleProduct = () => {
    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState({})
    const [count, setCount] = useState(1);
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`http://localhost:4000/products/${id}`).then((res) => {
            setSingleProduct(res.data)
        })
    }, [id])
    const addToCart = async () => {
        // await axios.post(`http://localhost:4000/cart`, { ...singleProduct, count: count, cost: count * singleProduct.cost }).then((res) => {
        //     alert('Item added into the cart')
        // }).catch((err) => {
        //     console.log(err);
        //     alert(err.message)
        // })

        let prevCount = 0;
        await axios.get(`http://localhost:4000/cart/${singleProduct.id}`).then((res) => {
            prevCount += +res.data.count
        }).catch(err => {
            prevCount = 0
        })
        if (prevCount === 0) {
            await axios.post(`http://localhost:4000/cart`, { ...singleProduct, count: count, cost: count * singleProduct.cost }).then((res) => {
                alert('Item added into the cart')
            }).catch((err) => {
                alert(err.message)
            })
        } else {
            await axios.put(`http://localhost:4000/cart/${singleProduct.id}`, { ...singleProduct, count: +count+prevCount, cost: +(+count+prevCount) * singleProduct.cost }).then((res) => {
                alert('Item added into the cart')
            }).catch((err) => {
                alert(err.message)
            })
        }
        dispatch(updatedCart())

       
    }
  return (
      <div style={{display: 'flex', gap: '100px', margin: '10px'}}>
          <div style={{ height: '80vh'}}>
              <img src={singleProduct.image} alt='' style={{height: '100%'}}/>
          </div>
          <div style={{alignSelf: 'center'}}>
              <div style={{ fontSize: '65px' }}>{singleProduct.type}</div>

              <span>Please select No.of Items you want to add in your cart</span>
              <div style={{ fontSize: '35px' }}>
                  <select style={{width: '100px', padding: '5px'}} onChange={(e) => {
                      setCount(e.target.value)
                  }}>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                  </select>
              </div>
              <div style={{ fontSize: '35px' }}>&#8377;{singleProduct.cost * count}</div>


              <div>
                  <button style={{ padding: '10px', width: '100%', cursor: 'pointer', background: 'orange', border: 'none', borderRadius: '15px' }} onClick={addToCart}>Add to cart</button>
              </div>
          </div>
    </div>
  )
}

export default SingleProduct