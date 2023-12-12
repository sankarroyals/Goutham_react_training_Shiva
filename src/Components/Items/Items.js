import React from 'react'
import Item from './Item'

const Items = () => {
    const data=[{id:1,product:"shampoo",price:150},{id:2,product:"milk",price:50}]
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     setData([{id:1,product:"shampoo",price:150},{id:2,product:"milk",price:50}])
    // },[])
    
  return (
    <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
   {data.map((d)=> (
   <Item d={d} />

   ) )}
    </div>
  )
}

export default Items