import React, { useState, useEffect } from 'react'
import Item from './Item'

const Items = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // axios.get(`http://products`).then(res => {
    //   setData(res.data)
    // })
    setData([{ id: 1, product: "shampoo", price: 150 }, { id: 2, product: "milk", price: 50 }])
  }, [])

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      {data.map((d) => (
        <Item d={d} />

      ))}
    </div>
  )
}

export default Items