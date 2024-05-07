import React from 'react'
import Navbar from './components/Navabar/Navbar'
import Main from './components/Main/Main'
import "./App.css"

const App = () => {
  return (
   <div className="container">
    <div className='inc_dec'>
        <div className="nav">  < Navbar />
        </div>
      <div className="middle">
      <Main/>
      </div>
    </div>
    </div>
  )
}

export default App