import React from 'react';
import './ProjectStyle.css'; // Shared CSS for all projects
import projectImage from '../../Images/GoatShelter.png'; // Replace with your image

const ProjectTemplate = () => {
  return (
    <div className="project-container">
        <div className="navbar-non-transparent"></div>
        <div className="title">
            <h1>Alphas Mountain - Oshawa Zoo Goat Shelter</h1>
        </div>
      <div className="project-image-section">
        <img src={projectImage} alt="Project Screenshot" className="project-image" />
      </div>
      <div className="tools">
        <p><em><strong>Made with: Sketchup and Machine Shop</strong></em></p>
      </div>

        <div className="project-content">
            <section className="project-section">
                <h2>Overview</h2>
                <p>
                “Alphas Mountain” is a mountain goat shelter. I created a 3D model for the owner of the Oshawa Zoo, emphasizing an aesthetic and accessible design with transportation and functionality in mind. The owner approved the design, and with government funding, we purchased over $4,000 in materials. The structure was built and transported to the zoo, where it stands today
                </p>
            </section>
        </div>

    </div>
  );
};

export default ProjectTemplate;
