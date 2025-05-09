import React from 'react';
import './ProjectStyle.css'; // Shared CSS for all projects
import projectVideo from '../../Videos/NibblesDemo.mp4';

const ProjectTemplate = () => {
  return (
    <div className="project-container">
        <div className="navbar-non-transparent"></div>
        <div className="title">
            <h1>Nibbles - An Ingredient Storage Solution</h1>
        </div>
      <div className="project-image-section">
        <video className="project-image" controls>
          <source src={projectVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="tools">
        <p><em><strong>Made with: HTML/CSS , Javascript, Solidworks, Arduino</strong></em></p>
      </div>

        <div className="project-content">
            <section className="project-section">
                <h2>Overview</h2>
                <p>
                Nibbles is a grocery management tool developed in 36 hours at Hack the North. An ESP32 tracks ingredients added to storage containers and updates their quantities in a MongoDB database. The React-based front-end retrieves this data, showing ingredient levels and suggesting recipes based on what’s available. When quantities fall below a threshold, Nibbles generates a shopping list to ensure you never run out of essentials.
                </p>
            </section>
        </div>

    </div>
  );
};

export default ProjectTemplate;
