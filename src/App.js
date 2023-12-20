import React, { useState } from "react";
import "./App.css"; 
import DisplayName from "./Components/DisplayName";

const App = () => {
  return (
    <div className="app-container"> 
      <center>
        <DisplayName />
      </center>
    </div>
  );
};

export default App;
