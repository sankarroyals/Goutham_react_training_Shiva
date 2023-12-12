import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import SingleProduct from './Components/Products/SingleProduct';
import Cart from './Components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/products' Component={Products} />
            <Route path='/product/:id' Component={SingleProduct} />
            <Route path='cart' Component={Cart} />


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
