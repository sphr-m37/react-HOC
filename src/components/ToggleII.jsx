import React from 'react'
import { withToggle } from '../HOC/withToggle'

const ToggleII = ({ isShow, toggleHandler }) => {

    return (
        <div className='toggleItem'>
            <button onClick={toggleHandler}>{isShow ? '-' : '+'}</button>
            {isShow && <p>clone component of toggle component</p>}
        </div>
    )
}

export default withToggle(ToggleII)