import React, { Component } from "react";
import Notification from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
class DashBoard extends Component {
  render() {
    //console.log(this.props);
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col m6 s12">
            <ProjectList projects={projects} />
          </div>
          <div className="col m5 s12 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(DashBoard);
