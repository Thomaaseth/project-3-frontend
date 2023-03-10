import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './pages/Layout/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  )
}

export default App
