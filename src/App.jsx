import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './Gallery/Gallery'
import UserDetails from './UserDetails/UserDetails'
import { Outsource } from './Renderpage/Outsource'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Outsource/>}/>
    </Routes>
  )
}

export default App
