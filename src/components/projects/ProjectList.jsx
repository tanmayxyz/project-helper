import React from "react";
import ProjectSummary from "./ProjectSummary";
const ProjectList = () => {
  return (
    <div>
      <div className="project-list section">
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
      </div>
    </div>
  );
};
export default ProjectList;
