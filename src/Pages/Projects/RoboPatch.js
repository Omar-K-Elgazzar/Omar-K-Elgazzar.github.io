import React from 'react';
import './ProjectStyle.css'; // Shared CSS for all projects
import projectVideo from '../../Videos/RoboPatch.mp4'; // Replace with your image

const ProjectTemplate = () => {
  return (
    <div className="project-container">
        <div className="navbar-non-transparent"></div>
        <div className="title">
            <h1>RoboPatch - Fixing Potholes with the Power of Robotics</h1>
        </div>
      <div className="project-image-section">
            <video className="project-image" controls>
            <source src={projectVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      <div className="tools">
        <p><em><strong>Made with: Lego Robotics, C/C++ & 3D Prints</strong></em></p>
      </div>

        <div className="project-content">
            <section className="project-section">
                <h2>Overview</h2>
                <p>
                RoboPatch is an autonomous and manually operable robot that uses various sensors to interact with its
                environment, including ultrasonic sensors to detect the distance between the robot and the road, and a
                color sensor to follow the roadline. The robot's motors are responsible for moving it along the road,
                turning at intersections, and dispensing material to fill potholes. The robot can be operated manually
                through Bluetooth or set to automatic mode, where it follows a pre-programmed path and performs its
                tasks autonomously.
                </p>
                <p>
                The robot detects potholes by comparing sensor data to predefined tolerances and triggers the dispensing
                mechanism to disperse filler material when a hole is identified. It continuously monitors its position and sensor inputs to adjust its
                movement and ensure it follows the line on the road it is on correctly. The robot can recognize when its
                task is complete by reaching the end of its path and filling all detected potholes. The shutdown procedure
                is initiated when the robot completes its task or when the operator intervenes using a manual override.
                The robot then returns to a standby state while it awaits the next operation.
                </p>
            </section>
        </div>

    </div>
  );
};

export default ProjectTemplate;
