import React, { useState, useEffect } from 'react'
import './Project.css'
import ecom from '../../assets/projects/e-com.png'
import notes from '../../assets/projects/notes.png'
import { useContext } from 'react'
import { themeContext } from '../context/context'

const Projects = () => {
  

  const {theme} = useContext(themeContext);
  return (
    <div className={theme === 'light'?'pro-main-light':'pro-main'}>
      <div className="pro-1">
          <img className='pro-1-img' src={ecom} alt="" />
          <div className="pro-1-content">
            <h1>E-Commerce Project</h1>
            <p>This project is a full-stack e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). It features user authentication, a dynamic shopping cart, and secure order processing. The frontend is fully responsive, ensuring a smooth user experience across devices. Admin users can manage products and orders through a dedicated admin panel.
<br/><br /><b>Technologies:</b>   React, Node.js, Express.js, MongoDB, JWT, Context API</p>
          </div>
      </div>
      <div className="pro-2">
      <img className='pro-1-img' src={notes} alt="" />
      <div className="pro-1-content">
            <h1>Notes-App Project</h1>
            <p>A simple and efficient web-based notes application developed using React.js. Users can add, edit, and delete notes with ease. The app features a responsive interface and local storage, ensuring that notes persist across sessions.
<br /><br /><b>Technologies:</b>  React.js, JavaScript, LocalStorage</p>
          </div>
      </div>
    </div>
  )
}

export default Projects

