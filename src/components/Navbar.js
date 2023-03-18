import React from 'react';
import './Navbar.css'
import Logo from '../images/Mimage1.png'
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = ()=>{
    return(
     <div className='navbar'>
        <div className='logo'>
           <img src ={Logo } alt ="logo" />
            </div> 
        <ul className='nav_menu'>
            <li className='nav_item'><a href='/'>Home</a></li>
            <li className='nav_item'><a href='/'>Contact</a></li>
            <li className='nav_item'><a href='/'>Bible </a></li>
            
        </ul>
     <div className='hamburgur'>
        <FaBars/>
     </div>
     </div>
    )
}
export default Navbar;