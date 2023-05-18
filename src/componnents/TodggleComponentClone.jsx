import React, { useState } from 'react'
import { ToggleHoc } from '../HOC/ToggleHoc'

const TodggleComponentClone = ({ isShow, toggleHandler }) => {

    return (
        <div className='toggleItem'>
            <button onClick={toggleHandler}>{isShow ? '-' : '+'}</button>
            {isShow && <p>clone component of toggle component</p>}
        </div>
    )
}

export default ToggleHoc(TodggleComponentClone)