import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './components/ejercicios/ejercicio1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contador/>
    </>
  )
}

export default App
