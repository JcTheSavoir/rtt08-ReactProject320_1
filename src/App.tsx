import './style.css'

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Options from './pages/Options';
import Information from './pages/Information';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/options' element={<Options/>}/>
        <Route path='/information' element={<Information/>}/>
      </Routes>
    </div>
  )
}

export default App
