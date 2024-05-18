import './style.css'

// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Options from './pages/Options';
import SearchMonster from './pages/SearchMonster'
import AllSpells from './pages/AllSpells';
import NavBar from './components/NavBar';
import EachSpell from './pages/EachSpell';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/options' element={<Options/>}/>
        <Route path='/:symbol/search' element={<SearchMonster/>}/>
        <Route path='/:symbol/all' element={<AllSpells/>}/>
        <Route path='/spells/:symbol' element={<EachSpell/>}/>
      </Routes>
    </div>
  )
}

export default App
