
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import './Main.css'
import { useState } from 'react'


const Main = () => {
  const [bellCount, setBellCount] = useState(0);

  const handleBellCounter = () => {
    setBellCount(prevCount => prevCount + 1);
  }

  return (
    <div className='main'>
        <Navbar bellCount={bellCount}></Navbar>
        <hr />
        <Outlet context={{handleBellCounter}}></Outlet>
    </div>
  )
}

export default Main