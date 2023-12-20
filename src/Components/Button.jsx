import React from 'react'

const Button = ({setName}) => {
  return (
      <div>
          <button onClick={()=>setName('sankar')}>change name</button>
      </div>
  )
}

export default Button