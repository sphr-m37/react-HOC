import React from 'react'
import Counter1 from './componnents/Counter1'
import Counter2 from './componnents/Counter2'
import ToggleComponent from './componnents/ToggleComponent'

import './App.css'
import TodggleComponentClone from './componnents/TodggleComponentClone'

export const App = () => {
  return (
    <div>
      <hr />
      <hr />
      <ToggleComponent />
      <hr />
      <hr />
      <Counter1 />
      <hr />
      <hr />
      <TodggleComponentClone />
      <hr />
      <hr />
      <Counter2 />
    </div>
  )
}
