import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div> This is Home Page...</div>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <button onClick={() => navigate("/reviews")}>Reviews</button>
    </div>
  );
};

export default Home;
