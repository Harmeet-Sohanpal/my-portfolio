import React from 'react'
import './secvices.css';
import fullstack from '../../assets/fullstack.png'
import front from '../../assets/front.png'
import backend from '../../assets/backend.png'
import { useContext } from 'react';
import { themeContext } from '../context/context';


const Services = () => {
  const {theme} = useContext(themeContext)
  return (
    <div className ={theme === 'light'?'ser-main-l':'ser-main'}>
      <div className="content">
        <h1></h1>
        <div className="ser">
          <div className="box1">
            <div className="box-head">
            <img src={fullstack} alt="" className="ser-img" />
            <h2>Full Stack Dev</h2>
            </div>
            <div className="ser-content">
              <p>I build complete web applications using the MERN stack (MongoDB, Express, React, Node.js), handling both front-end and back-end development to create responsive and scalable solutions tailored to your needs.</p>
            </div>
          </div>
          <div className="box2">
          <div className="box-head">
            <img src={front} alt="" className="ser-img" />
            <h2>Front end</h2>
            </div>
            <div className="ser-content">
              <p>I create user-friendly and responsive interfaces using React.js, HTML, CSS, and JavaScript, ensuring an engaging experience across all devices with a focus on performance and design.</p>
            </div>
          </div>
          <div className="box3">
            <div className="box-head">
            <img src={backend} alt="" className="ser-img" />
            <h2>Backend Dev</h2>
            </div>
            <div className="ser-content">
              <p>I develop secure and efficient back-end systems using Node.js, Express, and MongoDB. My services include API development, database management, and server-side logic to ensure smooth application performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services