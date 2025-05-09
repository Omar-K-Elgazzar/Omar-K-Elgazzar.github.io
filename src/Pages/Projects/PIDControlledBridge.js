import React from 'react';
import './ProjectStyle.css'; // Shared CSS for all projects
import projectImage from '../../Images/PID.png'; // Replace with your image

const ProjectTemplate = () => {
  return (
    <div className="project-container">
        <div className="navbar-non-transparent"></div>
        <div className="title">
            <h1>PID Controlled Bridge</h1>
        </div>
      <div className="project-image-section">
        <img src={projectImage} alt="Project Screenshot" className="project-image" />
      </div>
      <div className="tools">
        <p><em><strong>Made with: C/C++ , Arduino, 3D Prints + Laser-Cut Wood</strong></em></p>
      </div>

        <div className="project-content">
            <section className="project-section">
                <h2>Overview</h2>
                <p>
                A cart is placed in the middle of the bridge. When the cart is disturbed, a PID Control System is implemented and a servo constantly tilts the  bridge so that the cart always ends up back at the exact center of the bridge
                </p>
            </section>
        </div>

    </div>
  );
};

export default ProjectTemplate;
