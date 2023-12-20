import React, { createContext, useState } from 'react'

const AppContext = createContext();

const UseContext = (props) => {
  const [name, setName] = useState('Gowtham');
  return (
    <div>
      <AppContext.Provider value={{ name, setName }}>
        {/* All components inside the application */}
        {props.children}   
      </AppContext.Provider>
    </div>
  )
}

export { AppContext, UseContext };

