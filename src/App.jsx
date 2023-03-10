import { useState, useEffect } from 'react'
import Header from './components/header'
import Roll from './components/rollAdvice'
import Buttons from './components/buttons'
import Likes from './components/likes'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState('Roll for advice')
  const [id, setId] = useState(0)
  const [like, setLike] = useState([])

  const setQuote = async () =>{
    const res = await fetch("https://api.adviceslip.com/advice" , {cache:"no-cache" });// * no-cache prevents repeated advice
    const data = await res.json();
    setAdvice(data.slip.advice);
    setId(data.slip.id)
  }
  const counter = () =>{
    setCount(count + 1)
  } 
  const saveQuote = () =>{
    setLike([...like, advice])
  }
  const deleteQuote = () =>{
    setLike(['boom'])
  }

  return (
    <div className=" md:grid md:grid-cols-2 md:max-w-4xl md:mx-auto md:gap-x-4">
      <div>
      <Header count = {count} />
      <Roll advice={advice} id = {id} counter={counter} setQuote = {setQuote} />
      <Buttons save={saveQuote} trash = {deleteQuote} />
      </div>
      <Likes list={like} />
      <Footer />
    </div>
  )
}

export default App
