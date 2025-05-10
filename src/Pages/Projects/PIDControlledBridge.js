import React from 'react';
import './ProjectStyle.css'; // Shared CSS for all projects
import projectVideo from '../../Videos/PIDDemo.mp4'; // Replace with your image

const ProjectTemplate = () => {
  return (
    <div className="project-container">
        <div className="navbar-non-transparent"></div>
        <div className="title">
            <h1>PID Controlled Bridge</h1>
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
                Using Sketchup, I designed the pieces of a bridge that can tilt to either side with the use of an arduino and a servo motor. Alongside the 
                the bridge, I also designed a small mini cart that could be placed upon the bride. Once the pieces were designed, I laser cut them out and
                assembled it all together. Using an ultrasonic sensor attatched at the end of the bridge, a PID control system will constantly tilt the bridge
                so that the mini-cart stays exactly in the middle of the bridge regardless of any outside disturbances.
                </p>
            </section>
        </div>

    </div>
  );
};

export default ProjectTemplate;
