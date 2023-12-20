import React, { useContext } from 'react'
import { AppContext } from '../UseContext'

const Button = () => {
    const {clickable} = useContext(AppContext)
  return (
      <div>
          <button onClick={clickable}>click</button>
    </div>
  )
}

export default Button