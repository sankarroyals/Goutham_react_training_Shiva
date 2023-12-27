import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import SingleProduct from './Components/Products/SingleProduct';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import HOCFunc from './HelperFunctions/HOCFunc';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { changeCartCount } from './redux/Cart/CartReducer';

function App() {
  const dispatch = useDispatch()
  // when page load cart api called
  useEffect(() => {
    axios.get(`http://localhost:4000/cart`).then((res) => {
      dispatch(changeCartCount(res.data.length))
    })
  }, [])
  return (
    <div className="App">
      
        <Navbar />
        <div>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/login' Component={Login} />
            <Route path='/products' Component={Products} />
            <Route path='/product/:id' Component={SingleProduct} />
            <Route path='cart' Component={Cart} />
          </Routes>
        </div>
    </div>
  );
};

export default HOCFunc(App);
