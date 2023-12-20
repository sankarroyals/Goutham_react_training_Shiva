import React from "react";
import ComponentC from "./Component_C";
import "./App.css"; 
export const UserContext = React.createContext();

const App = () => {
  return (
    <div className="app-container">
      <center>
        <UserContext.Provider value={"Shiva"}>
          <ComponentC />
        </UserContext.Provider>
      </center>
    </div>
  );
};

export default App;
