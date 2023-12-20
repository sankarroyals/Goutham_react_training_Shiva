import React from "react";
import ComponentC from "./Component_C";
export const UserContext = React.createContext();

const App = () => {
  return (
    <div>
      <center>
        <UserContext.Provider value={"Shiva"}>
          <ComponentC />
        </UserContext.Provider>
      </center>
    </div>
  );
};

export default App;
