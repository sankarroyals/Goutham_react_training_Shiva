import React,{useState} from 'react'

const App = () => {
    // let name  = 'Shiva"   If we use like this instead of useState it wont reflect in document when the variable changes
    const [name,setName] = useState("shiva");
  return (
    <div>
        <center>
        <h1>useState Example</h1>
       <h1>{name}</h1>
            <button onClick={() => setName("Shiva Shankar")}>Change</button>
        </center>
    </div>
  )
}

export default App;