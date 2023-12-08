import React, { useState } from 'react'
import Child from '../Child/Child'

const Parent = () => {
    const [employee, setEmployee] = useState({
        name: 'sankar',
        age: 23
    })
    const [login, setLogin] = useState(false);
  return (
      <div>
          <div>Parent</div>
          <div><Child employee={employee} login={login} setLogin={setLogin} /></div>
    </div>
  )
}

export default Parent