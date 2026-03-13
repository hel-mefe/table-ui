import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='flex w-screen h-screen bg-red-400'>
      <Navbar />
    </div>
  )
}

export default App
