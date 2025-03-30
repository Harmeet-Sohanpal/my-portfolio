import React, { useState } from 'react';
import './contact.css';
import mail from '../../assets/email.png';
import { useContext } from 'react';
import { themeContext } from '../context/context';
import axios from 'axios'

const Contact = () => {

  const {theme} = useContext(themeContext)

  const [userdata,setUserdata]  = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleFormInput=(e)=>{
    const {name, value} = e.target
    setUserdata({...userdata,[name]:value})
  }

  const handlesubmission = async(e)=>{
      e.preventDefault()

      const formdata = new FormData();
      for(let key in userdata){
        formdata.append(key,userdata[key])
      }

      try{
        const response = await axios.post('http://localhost:4000/userdetails', userdata, {
          headers: { 'Content-Type': 'application/json' }
       });
      
        console.log("data sent successfully",response.data.message)
        alert("Thankyou For Response")
      }
      catch{
        console.log("Data not sent")
        alert("data not sent")

      }
      setUserdata({
        name:'',
        email: '',
        message: ''
      })

  }

  return (
    <div className={theme === 'light'?'contact-main-l':'contact-main'}>
      <div className="left">
        <h1 className='left-heading'>Let's Talk. <br />Tell Me About Your <br /> Project.</h1>
        <div className="mail">
          <img className='em' src={mail} alt="" />
          <p>
            <a style={{ textDecoration: 'none', color: theme === 'light'?'black':'white' }} href="mailto:Harmeet_sohanpal@outlook.com">
              Harmeet_sohanpal@outlook.com
            </a>
          </p>
        </div>
      </div>
      <div className="form">
        <form  onSubmit={handlesubmission}>
          <input 
            type="text" 
            name='name'
            placeholder='Your Name' 
            value={userdata.name} 
            onChange={handleFormInput} 
            required 
          />
          <br />
          <input 
            name='email'
            type="email" 
            placeholder='Your E-mail' 
            value={userdata.email} 
            onChange={handleFormInput} 
            required 
          />
          <br />
          <textarea 
            rows={10} 
            name='message'
            placeholder='Message' 
            value={userdata.message} 
            onChange={handleFormInput} 
            required 
          ></textarea>
          <br />
          <button type="submit" style={{backgroundColor: theme === 'light'?'#A594F9':''}} className='sub'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
