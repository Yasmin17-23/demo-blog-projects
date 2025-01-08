
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <Navbar></Navbar>
        <hr />
        <Outlet></Outlet>
    </div>
  )
}

export default Main