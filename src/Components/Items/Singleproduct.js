import React from 'react'
import { useParams } from "react-router-dom";

const Singleproduct = () => {
    const {id,product}=useParams()
  return (
    <div style={{padding: "10px", border: "2px solid black", width: "150px"}}>
    <div>{id}</div>
    <div>{product}</div>
    </div>
  )
}

export default Singleproduct;