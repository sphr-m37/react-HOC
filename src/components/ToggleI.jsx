import React from 'react'
import { withToggle } from '../HOC/withToggle'

const ToggleI = ({ isShow, toggleHandler }) => {

    return (
        <div className='toggleItem'>
            <button onClick={toggleHandler}>{isShow ? '-' : '+'}</button>
            {isShow && <p>test toggle commponent usein hoc</p>}
        </div>
    )
}

export default withToggle(ToggleI)