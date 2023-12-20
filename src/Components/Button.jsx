import React, { useContext } from 'react'
import { AppContext } from '../UseContext';

const Button = () => {
  const { setName } = useContext(AppContext);
  return (
      <div>
          <button onClick={()=>setName('sankar')}>change name</button>
      </div>
  )
}

export default Button