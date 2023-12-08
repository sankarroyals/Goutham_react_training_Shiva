import React from 'react'

const Child = ({ employee, login, setLogin, setEmployee }) => {
    const { name } = employee;
    const changeName = () => {
        setEmployee((prev)=>({...prev, name: 'mukesh'}))
    }
    return (
      login === true ? <div>
          <div>{name}</div>
          <div>{employee.age}</div>
          <button onClick={changeName}>change name</button>
          <button onClick={() => setLogin(false)}>Logout</button>
      </div> : 
      <div>
              <div>Please Login</div>
              <button onClick={()=> setLogin(true)}>Login</button>
      </div>
  )
}

export default Child