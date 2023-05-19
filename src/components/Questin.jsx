import React from 'react'
import { withShow } from '../HOC/withShow'

const Questin = ({ isShow, showToggle,id,title,info }) => {
    return (
        <div className='question' onClick={showToggle}>
            <p className='title'>{id}.{title}<button >{isShow ? '-' : '+'}</button></p>
            {isShow && <p>{info} </p>}
        </div>
    )
}
export default withShow(Questin)