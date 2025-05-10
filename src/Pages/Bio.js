import React from 'react';
import './Bio.css';
import Background from '../Images/Bio-Background.png';
import { FaChevronDown } from 'react-icons/fa';

const Bio = () => {
  const scrollToContent = () => {
    const section = document.getElementById("education");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="front-page" style={{ backgroundImage: `url(${Background})` }}>
        <div className="background-overlay"></div>
        <div className="overlay">
          <div className="overlay-content">
            <h1>Personal Biography</h1>
            <h3>From a curious child to a Mechatronics Engineer</h3>
            <button className="scroll-button" onClick={scrollToContent}>
              <FaChevronDown size={30} color="white" />
            </button>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="section education">
        <h1><em>Background & Education</em></h1>
        <p>
          Altough, born in Alexandria, Egypt, I have lived most of my life in Nort America. Always on the move, life was a constant cycle of trying to make new friends and 
          fitting into society. In 2024, I recieved my highschool diploma at Maxwell Heights Secondary School, located in Oshawa, ON. Today, I’m living my dream—
          pursuing Mechatronics Engineering at the University of Waterloo.
        </p>
      </div>

      {/* Clubs Section */}
      <div className="section clubs">
        <h1><em>Clubs & Extracurriculars</em></h1>

        <div className="club">
          <h3>🤖 Robotics Club</h3>
          <p>
            I’ve been building robots since the age of 8. From founding robotics clubs in the U.S. to leading one in Canada,
            I’ve always pushed myself to design innovative creations. As president of my high school robotics club, I led our team through
            several competitions including the Ontario Tech Sumo Bot Challenge and the Alamein International Robotics Championship in Egypt.
            These experiences sharpened my technical skills and built lifelong friendships. Today, I continue that passion working with desing teams
            at the University of Waterloo.
          </p>
        </div>

        <div className="club">
          <h3>🕌 Muslim Students Association (MSA)</h3>
          <p>
            Embracing diversity is core to who I am. As a Muslim, I’m passionate about fostering equity and inclusion on campus.
            Through the MSA, I help organize engaging events like fundraisers, social nights, and sports tournaments.
            As the Events Team Lead, I ensure every Muslim student on campus feels supported and represented.
          </p>
        </div>

        <div className="club">
          <h3>🛰️ UW Orbital – Design Team</h3>
          <p>
            As part of the Mechanical Subteam at UW Orbital, I help design critical aerodynamic components for our satellite systems.
            My work ensures that every piece contributes to a launch-ready, spaceworthy satellite.
          </p>
        </div>
      </div>
      <div className="section awards-list">
        <h1><em>Awards</em></h1>
        <div className="award-item">
            <span><em>Recipient of the <strong>$70,000</strong> TD Scholarship for Community Leadership</em></span>
            <span className="award-year">2024</span>
            </div>
            <div className="award-item">
            <span><em>Certificate of Endorsement of Technological Studies</em></span>
            <span className="award-year">2024</span>
            </div>
            <div className="award-item">
            <span><em>Schulich Leader Nominee Award</em></span>
            <span className="award-year">2024</span>
            </div>
            <div className="award-item">
            <span><em>12th Grade Subject Award of <strong>Technological Design: Robotics</strong></em></span>
            <span className="award-year">2024</span>
            </div>
            <div className="award-item">
            <span><em>11th Grade Subject Award of <strong>Technological Design: Robotics</strong></em></span>
            <span className="award-year">2023</span>
        </div>
      </div>
    </div>
  );
};

export default Bio;
