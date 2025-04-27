import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Our University is committed to delivering top-tier education through world-class faculty, innovative teaching methods. Our curriculum is designed to equip students with critical thinking, problem-solving, and real-world skills that prepare them for success in a rapidly changing global landscape.</p>
        <p>Our campus blends modern facilities with a vibrant student community. We encourage collaboration, creativity, and personal growth through diverse clubs, events, and support services. University fosters strong connections between students, faculty, and industry leaders to enrich both academic and social experiences.</p>
        <p>At Edusity, we believe in shaping future leaders who drive innovation and positive change. Our mission is to inspire lifelong learning and social responsibility. Through research, we aim to create a lasting impact in education, industry, and communities worldwide.</p>
      </div>
    </div>
  )
}

export default About
