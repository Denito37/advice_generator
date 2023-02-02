import { useState } from 'react'
import Header from './components/header';
import Roll from './components/rollAdvice'

function App() {
  return (
    <div className="bg-slate-700 min-h-screen">
      <Header />
      <Roll />
    </div>
  )
}

export default App
