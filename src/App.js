import React,{useState} from 'react'

const App = () => {
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