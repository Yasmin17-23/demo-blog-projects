
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png'
import './Navbar.css'
import { HiOutlineBellAlert } from "react-icons/hi2";



const Navbar = ({bellCount}) => {
  
  return (
    <nav>
       <a href=""><img src={logo} alt="" /></a>
        <div>
        <ul>     
               <li>
                <div className='nav-link'>
                    <p>Bell Center</p>
                    <HiOutlineBellAlert className='icon'/>
                    <span>{bellCount}</span>
                </div>
              </li>
             
            
            <li><a href="" className='sign'>Sign in</a></li>
            <li><a href="" className='reg'>Register</a></li>
        </ul> 
        </div> 
    </nav>
    
  )
}

Navbar.propTypes ={
   bellCount: PropTypes.number
}

export default Navbar