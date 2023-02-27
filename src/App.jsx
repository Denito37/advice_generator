import { useState } from 'react'
import Header from './components/header'
import Roll from './components/rollAdvice'
import Buttons from './components/buttons'
import Likes from './components/likes'

function App() {
  const [count, setCount] = useState(0);
  const counter = () =>{
    setCount(count + 1)
  } 
  const testFunc = () =>{
    console.log('hi')
  }
  return (
    <div className="bg-slate-700 h-screen">
      <Header count = {count} />
      <Roll counter={counter} />
      <Buttons save={testFunc} trash = {testFunc} />
      <Likes />
    </div>
  )
}

export default App
