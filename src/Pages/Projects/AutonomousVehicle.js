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
                I assembled the base of a car and attatched upon it an arduino, a breadboard containing a L293 (H-Bridge) chip and a 9v battery.
                At the head of the car was an Ultrasonic sensor that could be used to detect objects in the cars way. After writing some code to the 
                arduino, the car was able to move autonomously and avoid an obstacles placed in its way. As a side-challenge, I also coded the car to 
                follow a curvy black line using a color sensor and complete the track in record time!
                </p>
            </section>
        </div>

    </div>
  );
};

export default ProjectTemplate;
