import React from 'react'

const Child = ({ employee, login, setLogin }) => {
  const {name} = employee;
  return (
      login === true ? <div>
          <div>{name}</div>
          <div>{employee.age}</div>
          <button onClick={() => setLogin(false)}>Logout</button>
      </div> : 
      <div>
              <div>Please Login</div>
              <button onClick={()=> setLogin(true)}>Login</button>
      </div>
  )
}

export default Child