import React from 'react'
import CounterI from './components/CounterI'
import CounterII from './components/CounterII'
import ToggleI from './components/ToggleI'
import ToggleII from './components/ToggleII'

import './App.css'

export const App = () => {
  return (
    <div>
      <ToggleI />
      <hr />
      <CounterI />
      <hr />
      <ToggleII />
      <hr />
      <CounterII />
    </div>
  )
}
