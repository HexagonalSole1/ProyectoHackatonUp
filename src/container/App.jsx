import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../pages/Login"
import PaginaPrincipal from "../pages/PaginaPrincipal"

import '../css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={ <Login/>}></Route>
        <Route path='/PaginaPrincipal' element={ <PaginaPrincipal/>}></Route>

      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
