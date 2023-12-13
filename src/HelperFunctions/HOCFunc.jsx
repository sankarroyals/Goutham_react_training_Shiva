import React, { useEffect, useState } from 'react'
import Login from '../Components/Login/Login'

const HOCFunc = (Component) => {
    function useHooks(props) {
        const [login, setLogin] = useState(false)
        useEffect(() => {
            if (localStorage.getItem('user')) {
                setLogin(true)
            }  
        }, [])
        return (
           login===true ? <Component /> : <Login />
        )
    }
    return useHooks
}

export default HOCFunc