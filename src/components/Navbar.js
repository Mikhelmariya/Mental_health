import React , {useState} from 'react';
import './Navbar.css'
import Logo from '../images/listen.png'
import {FaBars,FaTimes} from 'react-icons/fa'
const bibleverse ="I love the Lord, for he heard my voice;he heard my cry for mercy.Because he turned his ear to me,I will call on him as long as I live.";
const Navbar = ()=>{
    const [click,setClick] = useState(false)
    // const handleClick =setClick(!click)
    const handleClick = () =>{
        setClick(!click)
    }
    return(
     <div className='navbar'>
        <div className='logo'>
           <img src ={Logo } alt ="logo" />
            </div> 
        <ul className='nav_menu'>
            <li className='nav_item'><a href='/'>Listen</a></li>
            <li className='nav_item'><a href='/'>Request for prayer</a></li>
            <li className='nav_item'><a href='/'>Let's share</a></li>
            <li className='nav_item'><a href='/'>Generate bible verse for me</a></li>
            
        </ul>
     <div className='hamburgur' onClick={handleClick}>
        {click ? <FaTimes size={30} style ={{color:'#ffffff'}}/> : <FaBars size={30} style ={{color:'#ffffff'}}/>}
        
     </div>
     </div>
    )
}
export default Navbar;