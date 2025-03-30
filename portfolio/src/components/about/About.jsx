import React from 'react'
import './about.css'
import myimg from '../../assets/myimg.jpg'
import react from '../../assets/reactjs.png'
import js from '../../assets/js.png'
import html from '../../assets/html5.png'
import css from '../../assets/css.png'
import express from '../../assets/express.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo.png'
import resume from '../../assets/resume.pdf'
import { useContext } from 'react'
import { themeContext } from '../context/context'

const About = () => {

  const {theme} = useContext(themeContext)

  return (
    <div className={theme === 'light'?'about-main-light':'about-main'}>
      <div className="img-dis">
      <div className="img-left">
        <img className='myImg' src ={myimg} alt="" />
      </div>
      <div className="dis-right">
          <div className="abt">
            <div className="abt1">
            <p className='abt-h'>About Me</p>
            <a href={resume} download className='abt-h1'>Resume</a>
            </div>
            <p className="dis">I am Harmeet Singh, a web developer with a strong foundation in Computer Science and Engineering, currently pursuing my Bachelor of Technology (B.Tech) in CSE from PCTE Group of Institutes, in the 7th semester. I also hold a Diploma in Computer Science from Gulzar Group of Institutes. My educational background has equipped me with a deep understanding of software development, algorithms, and modern web technologies.

          With hands-on experience in front-end development using HTML, CSS, JavaScript, and React.js, as well as full-stack projects leveraging the MERN stack (MongoDB, Express, React, Node.js), I bring a holistic approach to building scalable and efficient web applications. I am passionate about crafting seamless user interfaces and developing backend infrastructure that supports dynamic, responsive applications.

          I focus on delivering clean, maintainable code and a high-quality user experience, constantly seeking new challenges and opportunities to grow in the ever-evolving tech landscape.</p>
          </div>
      </div>
      </div>
    </div>
    // <div className="tech">
    //   <p className="tech-h">
    //     TECHNIACL SKILLS
    //   </p>
    //   <div className="skill-img-class">
    //     <img className="skill-img" src={html} alt=""  />
    //     <img className="skill-img" src={css} alt=""  />
    //     <img  className="skill-img" src={js} alt="" />
    //     <img  className="skill-img" src={mongo} alt="" />
    //     <img  className="skill-img" src={express} alt="" />
    //     <img className="skill-img" src={react} alt=""  />
    //     <img className="skill-img" src={node} alt=""  />
    //   </div>
    // </div>
  )
}

export default About