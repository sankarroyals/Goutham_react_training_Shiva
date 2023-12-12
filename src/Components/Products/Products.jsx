import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Product from './Product'
const Products = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/products`).then((res) => {
            setData(res.data)
        })
    }, [])
  
  return (
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', width: '900px', margin: 'auto', marginTop: '10px' }} >
          {data.map((d) => (
              <Product d={d} />
          ))}
    </div>
  )
}

export default Products