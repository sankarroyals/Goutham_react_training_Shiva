import React, { useContext, useState } from 'react'
import Button from './Button'

const DisplayName = ({name, setName}) => {
  return (
      <div>
          {name}
      <Button
        setName={setName}
      />
      </div>
  )
}

export default DisplayName