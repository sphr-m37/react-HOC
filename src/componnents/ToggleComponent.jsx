import React, { useState } from 'react'
import { ToggleHoc } from '../HOC/ToggleHoc'

const ToggleComponent = ({ isShow, toggleHandler }) => {

    return (
        <div className='toggleItem'>
            <button onClick={toggleHandler}>{isShow ? '-' : '+'}</button>
            {isShow && <p>test toggle commponent usein hoc</p>}
        </div>
    )
}

export default ToggleHoc(ToggleComponent)