import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
// import Home from "./Components/Home";
import Store from "./Components/Store";
import About from "./Components/About";
import React, { lazy, Suspense} from "react";

const Home = lazy(() => wait(1000).then(() => import("./Components/Home")))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route index element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store" >Store</Link>
        <Link to="/about" >About</Link>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
      </Suspense>
    </>
  );
}

function wait(time) {
    return new Promise( resolve => {
        setTimeout(resolve, time)
    })
}

export default App;
