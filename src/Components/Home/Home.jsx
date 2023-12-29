import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'


const Home = () => {
  // const name = useSelector((state) => state.basic.user)
  const { email, picture, name } = useSelector(
    (state) => state.Auth.userDetails
  );
  return (
     <>
       <div className='home_Content'>
          Hey! {name}, Welcome to Shopping Cart
    </div>
    <p>Please go to Products</p>
     </>
  )
}

export default Home