import React, { useEffect, useRef, useState } from 'react'

const Form = () => {
    const data = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data?.current?.value);

        // updating
        // data.current.value='shiva shankar';
    };

    useEffect(() => {
        data?.current?.focus();
    }, []);
  return (
      <form onSubmit={submitHandler} className="form-container">
          <input
              ref={data}
              type="text"
              placeholder="Enter your name"
              className="input-field"
          />
          <button type="submit" className="submit-button">
              Submit
          </button>
      </form>
  )
}

export default Form