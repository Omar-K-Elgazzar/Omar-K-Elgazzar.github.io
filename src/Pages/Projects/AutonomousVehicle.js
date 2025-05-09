import React from 'react';
import './ProjectStyle.css'; // Shared CSS for all projects
import projectVideo from '../../Videos/AutonomousVehicle.mp4'; // Replace with your image

const ProjectTemplate = () => {
  return (
    <div className="project-container">
        <div className="navbar-non-transparent"></div>
        <div className="title">
            <h1>Small-Scale Autonomous Arduino Car</h1>
        </div>
      <div className="project-image-section">
        <video className="project-image" controls>
            <source src={projectVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      <div className="tools">
        <p><em><strong>Made with: C/C++ , Arduino, 3D Prints + Laser-Cut Wood</strong></em></p>
      </div>

        <div className="project-content">
            <section className="project-section">
                <h2>Overview</h2>
                <p>
                This Arduino vehicle, using multiple sensors and an elaborate program, is able to either drive completely on its own while avoiding obstacles or follow a given line no matter how curvy it gets. 
                </p>
            </section>
        </div>

    </div>
  );
};

export default ProjectTemplate;
