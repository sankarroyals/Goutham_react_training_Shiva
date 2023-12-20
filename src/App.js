import React, { useState } from "react";
import "./App.css"; 
import DisplayName from "./Components/DisplayName";

const App = () => {
  const [name, setName] = useState('Shiva')
  return (
    // props drilling
    <div className="app-container"> 
      <center>
        <DisplayName 
          name={name} setName={setName}
        />
      </center>
    </div>
  );
};

export default App;
