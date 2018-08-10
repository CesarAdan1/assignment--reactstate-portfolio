import React, { Component } from 'react'

class Projects extends Component {

  constructor(props) {
    super();

    this.state = {
      likes: props.l,
      counterClicks: 0
    };
  }

  render () {

    return (

        <div className={ "project--team" }>
          <span className="project-title">Example</span>
        </div>

    );
  }
}

export default Projects;