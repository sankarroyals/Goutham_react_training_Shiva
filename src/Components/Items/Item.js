import React from 'react'
import { useNavigate } from "react-router-dom";

const Item = ({ d }) => {
  const navigate = useNavigate()
  return (
    <div style={{ padding: "10px", border: "2px solid black" }}>
      <div>{d.product}</div>
      <div>{d.price}</div>
      <button onClick={() => navigate(`/items/${d.id}/${d.product}`)}>
        go to the product
      </button>
    </div>
  )
}

export default Item