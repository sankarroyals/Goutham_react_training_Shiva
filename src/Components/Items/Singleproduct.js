import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

const Singleproduct = () => {
  const { id, product } = useParams()
  const navigate =  useNavigate()
  // const [singleData, setSingleData] = useState({})
  // useEffect(() => {
    // axios.get(`http://products/${id}`).then(res => {
    //   setSingleData(res.data)
    // })
  // }, [id])
  
  return (
    <>
      <div onClick={()=>navigate(-1)} style={{cursor: 'pointer'}}>Back</div>
      <div style={{ padding: "10px", border: "2px solid black", width: "150px", marginTop: '10px' }}>
        <div>{id}</div>
        <div>{product}</div>
      </div>
    </>
    
  )
}

export default Singleproduct;