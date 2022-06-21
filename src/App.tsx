import { useState } from 'react'
import './App.css'
import logo5 from './images/logo5.png'
import { Input } from './components/input'
import { Button } from './components/button'

export function App() {

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo5} alt="" style={{width: '250px'}} />
        <Input type='text'/>
        <Input type='password'/>
        <Button type='button'/>
      </div>

    </div>
  )
}

