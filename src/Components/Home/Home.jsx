import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className='home_Content'>
        <h1>Welcome to Shopping Cart</h1>
        <p>Explore our products and start building your shopping cart!</p>
      </div>
      <div className='shopping_links'>
        <p>Please go to Products to view our available items.</p>
        <p>Already have items in your cart? <a href='/cart'>View Cart</a></p>
      </div>
    </>
  );
};

export default Home;
