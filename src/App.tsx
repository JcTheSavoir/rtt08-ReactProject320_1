import './style.css'

// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
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
      <Outlet />

    </div>
  )
}

export default App
