import React, { createContext, useState } from 'react'

const AppContext = createContext();

const UseContext = (props) => {
  const [name, setName] = useState('shiva');
  const clickable = () => {
    setName('Goutham');
  }
  return (
    <div>
      <AppContext.Provider value={{ name, setName, clickable }}>
        {/* All components inside the application */}
        {props.children}
      </AppContext.Provider>
    </div>
  )
}


export { AppContext, UseContext };

