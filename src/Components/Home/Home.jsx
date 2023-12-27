import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'

const Home = () => {
  const name = useSelector((state) => state.basic.user)
  return (
     <>
       <div className='home_Content'>
          Welcome {name} to Shopping Cart
    </div>
    <p>Please go to Products</p>
     </>
  )
}

export default Home
