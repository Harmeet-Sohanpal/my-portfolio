import React, { useContext } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import x from '../../assets/x.png'
import linkedin from '../../assets/linkedin.png'
import linkedin1 from '../../assets/linkedin1.png'
import twitter from '../../assets/twitter.png'
import github from '../../assets/github.png'
import { themeContext } from '../context/context'

const Home = () => {

  const {theme}= useContext(themeContext)

  return (
    <div className={theme === 'light'?'home-light':'home'}>
      <p className="main-line">Hi, I'm Harmeet Singh,</p>
      <p className='sub-line'>A MERN Stack Developer</p>
      <Link style={{textDecoration: 'none', color:'White'}} to='/contact'><button>Contact Me</button></Link>
      <div className="links">
        <img className='imgs2 imgs' src={theme === 'light'?linkedin1:linkedin} alt="" />
        <img className='imgs' src={theme === 'light'?twitter:x} alt="" />
        <img className='imgs1 imgs' src={github} alt="" />
      </div>
    </div>
  )
}

export default Home

