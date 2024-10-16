import React from 'react';
import './style.css'

const Projects = () => (
  <section id="projects">
    <h2>My Projects</h2>
    <div className="project">
      <h3>KidsCare App</h3>
      <p>Mobile app for managing children's medical records.</p>
      <a href="https://github.com/YourUsername/KidsCare" target="_blank">GitHub Repo</a>
    </div>
    <div className="project">
      <h3>Sri Lanka Travel Guide</h3>
      <p>A website featuring tourist destinations and hotels in Sri Lanka.</p>
      <a href="https://github.com/YourUsername/TravelGuide" target="_blank">GitHub Repo</a>
    </div>
  </section>
);

export default Projects;
