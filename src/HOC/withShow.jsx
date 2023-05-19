import React, { useState } from 'react'

export const withShow = (Component) => {
   
    const newComponent = (props) => {

        const [isShow, setIsShow] = useState(false)

        const showToggle = () => {
            setIsShow(prev => !prev)
        }
        return <Component isShow={isShow} showToggle={showToggle} {...props} />
    }
    return newComponent

}
