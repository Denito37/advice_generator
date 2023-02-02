import { useState } from 'react'
import Roll from './components/rollAdvice'
import Header from './components/header'
import Buttons from './components/buttons'
import Likes from './components/likes'

function App() {
  return (
    <div className="bg-slate-700 h-screen">
      <Header />
      <Roll />
      <Buttons />
      <Likes />
    </div>
  )
}

export default App
