import React from 'react';
import './Home.css';
import Omar from '../Images/Omar-Elgazzars-Headshot.jpg';
import Background from '../Images/robotArm.jpg';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';



const Home = () => {

  const scrollToContent = () => {
    const section = document.getElementById("aboutMe-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      {/* Top Section: Intro */}
      <div className="front-page" style={{ backgroundImage: `url(${Background})` }}>
      <div className="background-overlay"></div>
        <div className="overlay">
          <div className="overlay-content">
            <h1>Omar Elgazzar</h1>
            <h3>Upcoming Mechatronics Engineer with a Fiery Passion for Robotics</h3>
            <div className="contact-icons">
              <a href="mailto:omar.k.elgazzar@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={50}/>
              </a>
              <a href="https://www.linkedin.com/in/omar-elgazzar-331b55310/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={50} />
              </a>
              <a href="https://github.com/Omar-K-Elgazzar" target="_blank" rel="noopener noreferrer">
                <FaGithub size={50}/>
              </a>
            </div>
            <button className="scroll-button" onClick={scrollToContent}>
              <FaChevronDown size={30} color="white" />
            </button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div id="aboutMe-section" className="top-section">
        <div className="image-section">
          <img src={Omar} alt="Omar Elgazzar" className="profile-image" />
        </div>
        <div className="intro-section">
          <h2><strong>About Me</strong></h2>
          <p>
            A leader? A STEM passionate innovator? An upstanding role model? I aspire to be all those things. Throughout my life, the qualities of leadership and responsibility have helped me achieve many of my goals and dreams.
          </p>
          <p>
            Embracing my role as an outgoing leader, I am always on the lookout for opportunities to instigate positive change within my local community and, ideally, on a global scale. This involves orchestrating dynamic initiatives, spearheading events, and engaging with diverse individuals.
            Fueled by a profound passion for STEM, I aspire to carve out a path as a Mechatronics Engineer. The more I delve into the captivating realm of robotics, the stronger my enthusiasm grows. I am eager to leverage my skills to bring tangible benefits to the broader population.
          </p>
          <p>
            On a personal level, I strive to embody my values and principles steadfastly, even in the face of adversity. This commitment manifests in my empathetic understanding, kindness, diligent work ethic, appreciation for others, and unwavering perseverance
          </p>
        </div>
      </div>
      <div className="more-info">
        <p><strong>Want to learn more about me? View my bio by clicking on the button below!</strong></p>
        <button onClick={() => window.location.href = '/bio'}>Bio</button>

      </div>
    </div>
  );
};

export default Home;
