import React, { useContext } from 'react'
import { AppContext } from '../UseContext'
import Button from './Button';

const C3 = () => {
    const { name } = useContext(AppContext);
  return (
      <div>
          {name}
          <Button />
      </div>
  )
}

export default C3