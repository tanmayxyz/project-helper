import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-2">
        <span className="card-title"> {project.title}</span>
        <p>posted by react gang</p>
        <p className="grey-text">28 jan,2019</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
