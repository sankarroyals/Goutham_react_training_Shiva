import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className='home_Content'>
        <h1>WELCOME TO SHOPPING CART</h1>
        <p>Explore Our Products and Start Building Your Shopping Cart</p>
      </div>
      <div className='shopping_links'>
        <span>Please go to Products to view our available items</span>
        <p>Already have items in your cart? <a href='/cart'>View Cart</a></p>
      </div>
    </>
  );
};

export default Home;
