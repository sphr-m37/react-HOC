import React from 'react'
import { withCounter } from "../HOC/withCounter"

const CounterII = ({ counter,addCount,minusCount,title}) => {
   
    return (
        <>
            <h2>{title} component</h2>
            <h3>count : {counter}</h3>
            <button onClick={addCount}>add count</button>
            <button onClick={minusCount} >minus count</button>
        </>
    )
}

export default withCounter(CounterII,'Counter2')