import React from "react";

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title bold">Project title - {id}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              similique beatae asperiores! Enim aliquid fugit natus non nisi.
              Officiis, necessitatibus.
            </p>
          </div>
          <div className="card-action  lighten-4 grey-text">
            <div>posted by me</div>
            <div>28 april,2019</div>
          </div>
        </div>
      </div>
    </div>
  );
}
