import React, { createContext, useState } from 'react'

// step 1
const AppContext = createContext()

const ContextApi = (props) => {
    const [name, setName] = useState("Gowtham");
    
    return (
      //   step 2
      <AppContext.Provider value={{name, setName}}>
          {props.children}
      </AppContext.Provider>
  )
}

// export default ContextApi

export { AppContext, ContextApi };