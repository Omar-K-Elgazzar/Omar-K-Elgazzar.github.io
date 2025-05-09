import React from 'react';
import './ProjectStyle.css'; // Shared CSS for all projects
import projectImage from '../../Images/InfectedGame.png'; // Replace with your image

const ProjectTemplate = () => {
  return (
    <div className="project-container">
        <div className="navbar-non-transparent"></div>
        <div className="title">
            <h1>The Infected Game</h1>
        </div>
      <div className="project-image-section">
        <img src={projectImage} alt="Project Screenshot" className="project-image" />
      </div>
      <div className="tools">
        <p><em><strong>Made with: C/C++</strong></em></p>
      </div>

        <div className="project-content">
            <section className="project-section">
                <h2>Overview</h2>
                <p>
                The Infected is a game developed using C#. It uses OOP and can be played using Xbox controllers or keyboards. The game is a simple tag concept, where the objective is to not be the last player to be the “Infected”. The game features special powerups, an anti-gravity mode and different playable maps
                </p>
            </section>
        </div>

    </div>
  );
};

export default ProjectTemplate;
