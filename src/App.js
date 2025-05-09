import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import PIDControlledBridge from './Pages/Projects/PIDControlledBridge';
import RoboPatch from './Pages/Projects/RoboPatch';
import Nibbles from './Pages/Projects/Nibbles';
import AutonomousVehicle from './Pages/Projects/AutonomousVehicle';
import GoatShelter from './Pages/Projects/GoatShelter'
import InfectedGame from './Pages/Projects/InfectedGame'
import Bio from './Pages/Bio';
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <div className="page-contents">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work-experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/PIDControlledBridge" element={<PIDControlledBridge />} />
            <Route path="/projects/RoboPatch" element={<RoboPatch />} />
            <Route path="/projects/Nibbles" element={<Nibbles />} />
            <Route path="/projects/AutonomousVehicle" element={<AutonomousVehicle/>} />
            <Route path="/projects/GoatShelter" element={<GoatShelter/>} />
            <Route path="/projects/InfectedGame" element={<InfectedGame/>} />
            <Route path="/bio" element={<Bio />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
