import React, { useContext, useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import menus from '../../assets/menu.png'
import close from '../../assets/cross.png'
import { themeContext } from '../context/context'
import light from '../../assets/light.png'
import dark from '../../assets/dark.png'
import darkd from '../../assets/menud.png'

const Navbar = () => {

  const {theme, toggleTheme} = useContext(themeContext)

    const [menu, setmenu] = useState();
    const [open, setopen] = useState(false);
    const [isRotating, setIsRotating] = useState(false);

    
    const handleThemeToggle = () => {
      setIsRotating(true);
      setTimeout(() => {
        toggleTheme();
        setIsRotating(false);
      }, 300); // Match the animation duration
    };

    const toggle =()=>{
      setopen(!open)
    }
    

  return (
    <nav className={theme === 'light'?'nav-light':''}>
        <Link style={{textDecoration: 'none', color:'White'}} to='/'><div className="nav-logo"><p className="logo" onClick={()=>setmenu("home")}>Harmeet Singh{menu==='home'?<></>:<></>}</p></div></Link>
        <div className="nav-items">
        <ul onClick={toggle} className={`${open?'ulOpen':''}`}>
        <Link  onClick={()=>setmenu('projects')} style={{textDecoration: 'none', color:'White'}} to='/projects'><li style={{backgroundColor: menu === 'projects'  ? (theme === 'light' ? '#CDC1FF' : 'rgb(255, 10, 10)'):'', color: menu === 'projects' ?(theme === 'light'?'#424242':''):''}}>Projects</li></Link>
        <Link onClick={()=>setmenu('about')} style={{textDecoration: 'none', color:'White'}} to='/about'><li style={{backgroundColor: menu === 'about'  ? (theme === 'light' ? '#CDC1FF' : 'rgb(255, 10, 10)'):'', color: menu === 'about' ?(theme === 'light'?'#424242':''):''}} >About</li></Link>
        <Link onClick={()=>setmenu('services')} style={{textDecoration: 'none', color:'White'}} to='/services'><li style={{backgroundColor: menu === 'services'  ? (theme === 'light' ? '#CDC1FF' : 'rgb(255, 10, 10)'):'', color: menu === 'services' ?(theme === 'light'?'#424242':''):''}} >Services</li></Link>
        <Link onClick={()=>setmenu('contact')} style={{textDecoration: 'none', color:'White'}} to='/contact'><li className='con' style={{backgroundColor: menu === 'contact'?(theme === 'light' ? '#CDC1FF' : 'rgb(255, 10, 10)'):'', color: menu === 'contact' ?(theme === 'light'?'#424242':''):''}} >Contact</li></Link>
        </ul>
        </div>
        <div className="contact">
        <img onClick={handleThemeToggle} src={theme == 'dark'?light:dark} alt="" className={`theme ${isRotating ? 'rotate' : ''}`} />
        <Link onClick={()=>setmenu('contact')} style={{textDecoration: 'none', color:'White'}} to='/contact'><p className="contact-n">{menu==='home'?<></>:<></>}Contact Me</p></Link>
        </div>
        <img style={{width:'20px',height:'auto'}} onClick={toggle} className='close' src={theme==='light'?(open?close:darkd):(open?close:menus)} alt="" />
    </nav>
  )
}

export default Navbar