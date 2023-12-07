import React from 'react'
import Child from '../Child/Child'

// functional component
const Parent = () => {
  return (
    <div>
      <div>Parent</div>
      <Child />
    </div>
  )
}

export default Parent