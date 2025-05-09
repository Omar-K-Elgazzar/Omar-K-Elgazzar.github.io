import React from 'react';
import './Experience.css';
import Background from '../Images/Work-Experience-Background.jpg';
import Ottonomi from '../Images/Ottonomi-AI.png';
import ResearchAssistant from '../Images/Research-Assistant.png';
import RamadanRespite from '../Images/Ramadan-Respite.png';
import PLP from '../Images/PLP-Supervision.png';
import { FaChevronDown } from 'react-icons/fa';

const Experience = () => {
  const scrollToContent = () => {
    const section = document.getElementById("experience-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      {/* Top Section: Intro */}
      <div className="front-page" style={{ backgroundImage: `url(${Background})` }}>
      <div className="background-overlay"></div>
        <div className="overlay">
          <div className="overlay-content">
            <h1>Work Experience</h1>
            <h3>Upcoming Mechatronics Engineer with a Fiery Passion for Robotics</h3>
            <button className="scroll-button" onClick={scrollToContent}>
              <FaChevronDown size={30} color="white" />
            </button>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div id="experience-section" className="experience-wrapper">

        {/* Experience 1 */}
        <div className="experience-item">
          <div className="experience-image">
            <img src={Ottonomi} alt="Ottonomi AI" />
          </div>
          <div className="experience-content">
            <h2>AI Software Engineer</h2>
            <p><em>Ottonomi AI | Jan. 2025 - May. 2025</em></p>
            <ul>
              <li>Trained custom object detection model to detect vehicles and pedestrians in severe weather</li>
              <li>Trained custom object detection model to detect any roadkill and alert authorities to remove the hazard</li>
              <li>Built Python tool to automate the identification of frequent vehicle stopping zones</li>
              <li>Used Docker to containerize ML workflows for deployment</li>
            </ul>
          </div>
        </div>
        <hr className="experience-divider" />

        {/* Experience 2 */}
        <div className="experience-item reverse">
          <div className="experience-image">
            <img src={ResearchAssistant} alt="Mechanical Research Assistant" />
          </div>
          <div className="experience-content">
            <h2>Mechanical Research Assistant</h2>
            <p><em>Ontario Tech University | Jan. 2025 - May. 2025</em></p>
            <ul>
              <li>Researched countermeasures for fluid vortex formations around bluff bodies and cylinders</li>
              <li>Designed cylinders employing active flow control techniques on Solidworks</li>
              <li>3D printed cylinders and tested them in a wind tunnel to measure effectiveness against vortex formation</li>
              <li>Troubleshooted and fixed faulty computers and lab equipment</li>
            </ul>
          </div>
        </div>
        <hr className="experience-divider" />

        {/* Experience 3 */}
        <div className="experience-item">
          <div className="experience-image">
            <img src={RamadanRespite} alt="Ramadan Respite" />
          </div>
          <div className="experience-content">
            <h2>Founder / CEO</h2>
            <p><em>Ramadan Respite | May. 2023 - Present</em></p>
            <ul>
              <li>Founded a registered non-profit organization combating food insecurity through private meal/grocery delivery</li>
              <li>Organized volunteers to cook halal meals and deliver them discreetly to beneficiaries</li>
              <li>Helped 500+ individuals annually across the GTA</li>
            </ul>
          </div>
        </div>
        <hr className="experience-divider" />

        {/* Experience 4 */}
        <div className="experience-item reverse">
          <div className="experience-image">
            <img src={PLP} alt="PLP Student Supervisor" />
          </div>
          <div className="experience-content">
            <h2>PLP Student Supervisor</h2>
            <p><em>Durham District School Board | Dec. 2022 - July 2024</em></p>
            <ul>
              <li>Mentored students with mental and physical disabilities in STEM subjects</li>
              <li>Engaged in social activities with students, including outings to movies and parks</li>
              <li>Supported student integration with staff and peers to improve communication and social skills</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
