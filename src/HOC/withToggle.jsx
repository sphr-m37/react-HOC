import React, { useState } from 'react'

export const withToggle = (Component) => {

    const newComponent = () => {
    const [isShow, setIsShow] = useState(false)
    const toggleHandler = () => {
        setIsShow(prev => !prev)
    }
        return <Component isShow={isShow} toggleHandler={toggleHandler} />
    }
    return newComponent 
}
