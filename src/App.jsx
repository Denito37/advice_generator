import { useState } from 'react'
import Loading from './components/loading'
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
  let itemsArray = localStorage.getItem('advice') ? JSON.parse(localStorage.getItem('advice')) : [];

  const counter = () =>{
    setCount(count + 1)
  } 
  const setQuote = async () =>{
    setAdvice(<Loading />)
    const res = await fetch("https://api.adviceslip.com/advice", {cache:"no-cache"} )
    const data = await res.json()
    setTimeout(() =>{
      setId(data.slip.id)
      setAdvice(data.slip.advice)
    }, 300)
  }
  const saveQuote = () =>{
    setLike([...like, advice])
    itemsArray.push(advice)
    localStorage.setItem('advice', JSON.stringify(itemsArray));
  }
  const deleteQuote = () =>{
    setLike([])
    itemsArray = [];
    localStorage.clear();
  }
  const removeQuote = (e) =>{
      itemsArray.splice(itemsArray.indexOf(e.target.previousSibling.innerHTML),1)
      localStorage.setItem('advice', JSON.stringify(itemsArray));
      setLike([...itemsArray])
  }

  function keyControls(control){
    if(control.key === 'Enter'){
      setQuote()
    }
    if(control.key === 'S'){
      saveQuote()
    }
    if(control.key === 'Backspace'){
      deleteQuote()
    }
  }
  //document.addEventListener('keydown', keyControls)

  return (
    <div className=" mx-6 md:grid md:grid-cols-2 md:max-w-4xl md:mx-auto md:gap-x-4">
      <div className=' md:my-12'>
      <Header count = {count} />
      <Roll advice={advice} id = {id} counter={counter} setQuote = {setQuote} />
      <Buttons save={saveQuote} trash = {deleteQuote} />
      </div>
      <Likes storage={itemsArray} remove={removeQuote} />
      <Footer />
    </div>
  )
}

export default App
