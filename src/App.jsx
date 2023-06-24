import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './Message';

function App() {
  const [advice , getadvice] = useState('');
  const [count, setCount] = useState(0)
  async function getadviceHandler(){
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();
    getadvice(data.slip.advice)
    setCount((n)=> n + 1)
  }

  useEffect(()=>{
    getadviceHandler();
  } ,[])

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getadviceHandler} >Get Advice</button>
      <Message count={count}/>
    </>
  )
}

export default App
