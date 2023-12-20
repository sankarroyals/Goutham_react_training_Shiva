import React, {useRef} from 'react'
import { useEffect } from 'react';

const App = () => {
  const data = useRef(null);
  const submitHandler = e =>{
    e.preventDefault();
    console.log(data.current.value);

    // updating
    // data.current.value='shiva shankar';
  }
  useEffect(()=>{
    data.current.focus();
  },[]);

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input ref={data} type='text' placeholder='Enter your name' />
          <input type='submit' />
        </form>
      </center>
    </div>
  )
}

export default App