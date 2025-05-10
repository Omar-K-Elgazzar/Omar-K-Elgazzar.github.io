import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import Background from '../Images/microchip.jpg';
import Nibbles from '../Images/Nibbles-FrontPage.png';
import AlphasMountain from '../Images/AlphasMountain-FrontPage.png';
import InfectedGame from '../Images/InfectedGame-FrontPage.png';
import PID from '../Images/PID.png';
import RoboPatch from '../Images/RoboPatch-FrontPage.png';
import AutnomousVehicle from '../Images/AutonomousVehicle-FrontPage.png';
import { FaChevronDown } from 'react-icons/fa';


const Projects = () => {

    const navigate = useNavigate();
    // Function to handle navigation
    const viewProject = (projectName) => {
    navigate(`/projects/${projectName}`); // Navigate to the specific project's page
    };

    const scrollToContent = () => {
        const section = document.getElementById("projects");
        section.scrollIntoView({ behavior: "smooth" });
    };

    // Array of projects for scalability
    const projectList = [
        { name: 'Nibbles', image: Nibbles, title: 'Nibbles', description: "Be up to date with your ingredient storage and available recipies!" },
        { name: 'GoatShelter', image: AlphasMountain, title: 'Alphas Mountain', description: "Designed and built a full scale goat shelter for the Oshawa Zoo" },
        { name: 'InfectedGame', image: InfectedGame, title: 'The Infected Game', description: "An Xbox tag-themed video game designed with C++!" },
        { name: 'PIDControlledBridge', image: PID, title: 'PID Controlled Bridge', description: "Balancing a mini-kart on a bridge with PID" },
        { name: 'RoboPatch', image: RoboPatch, title: 'RoboPatch', description: "Fixing potholes with the power of robotics!" },
        { name: 'AutonomousVehicle', image: AutnomousVehicle, title: 'Small-Scale Autonomous Arduino Car', description: "Autonomous Arduino Driven Car that can avoid obstacles" },
      ];


  return (
    <div className="home-container">
      {/* Top Section: Intro */}
      <div className="front-page" style={{ backgroundImage: `url(${Background})` }}>
      <div className="background-overlay"></div>
        <div className="overlay">
          <div className="overlay-content">
            <h1>Projects</h1>
            <h3>Checkout the innovative projects I've worked on over the years!</h3>
            <button className="scroll-button" onClick={scrollToContent}>
              <FaChevronDown size={30} color="white" />
            </button>
          </div>
        </div>
      </div>
      <div id="projects" className="projects">
            <div className="project-list">
                {projectList.map((project) => (
                <div
                    key={project.name}
                    className="individual-project"
                    onClick={() => viewProject(project.name)} // Handle click for the entire card
                    style={{ cursor: 'pointer' }} // Indicate clickability
                >
                    <img src={project.image} alt="Project" className="project-image" />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
                ))}
            </div> 
        </div>
    </div>
  );
};

export default Projects;
