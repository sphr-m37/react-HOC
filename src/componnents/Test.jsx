import React, { useState } from 'react'
import { CounterHoc } from '../HOC/CounterHoc'

const Test = ({ counter,addCount,minusCount}) => {
   
    return (
        <>
            <h2>TEST component</h2>
            <h3>count : {counter}</h3>
            <button onClick={addCount}>add count</button>
            <button onClick={minusCount} >minus count</button>
        </>
    )
}

export default CounterHoc(Test)