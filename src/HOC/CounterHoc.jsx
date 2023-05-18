import React, { useState } from 'react'

export const CounterHoc = (Component,title) => {
    
    const hocComponent = () => {
    const [counter, setCounter] = useState(0)
    const addCount = () => {
        setCounter(prev => prev + 1)
    }
    const minusCount = () => {
        setCounter(prev => prev - 1)
    }
    return <Component title={title} counter={counter} addCount={addCount} minusCount={minusCount} />
    }
    return hocComponent
}