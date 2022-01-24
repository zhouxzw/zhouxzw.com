import React from "react";
import Slot from "./Slots/Slot";
import projects from "../../data/data";

function Project(props) {
  return (
    <div className="project-page" id="projects">
      <div className="project-container">
        <div className="intro-title">
          <h2>Projects</h2>
          <hr></hr>
        </div>

        {projects.map((project, key) => (
          <Slot project={project} key={"proj: " + key}></Slot>
        ))}
      </div>
    </div>
  );
}

export default Project;
