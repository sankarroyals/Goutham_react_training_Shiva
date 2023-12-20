import React, { useContext, useState } from 'react'
import Button from './Button'
import { AppContext } from '../UseContext'

const DisplayName = () => {
  const { name } = useContext(AppContext);
  return (
      <div>
          {name}
      <Button />
      </div>
  )
}

export default DisplayName