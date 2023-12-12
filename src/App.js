import React,{useState,useEffect} from 'react'

const App = () => {
    const [count,setCount] = useState(0);
    useEffect(() => console.log("clicked"),[])
  return (
    <div>
        <center>
        <h1>useEffect Example</h1>

            <h1>You Clicked {count} Times</h1>
            <button onClick={() => setCount(count+1)}>Click Me</button>
        </center>
    </div>
  )
}

export default App;