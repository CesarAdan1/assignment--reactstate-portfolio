import React, { Component } from 'react';
import Projects from './Projects.js'
import { projectData } from '../data/datasource'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`
       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>
       -- substitute values for PROJECT-TYPE and PROJECT-NAME
   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state
        Hint: you will want to set the component's initial state in the
              constructor() function
   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state
       Hint: you may want to use .filter() then .map()
 */

class FilterProjects extends Component {
  constructor(props) {
    super();
    this.state = {
      spanish : 
    }
  }
  render() {

    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" className="project-type project-type--all project-type--selected">
              All
            </span>

            <span data-ptype="solo" className="project-type project-type--solo " >
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" className="project-type project-type--team">
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

          { projectData.map(function(frame) {
            return <Projects  theRole={ frame.role } nameOfProj={ frame.projectName } isSolo={ frame.solo } />
          }) }

          </div>
        </section>

    );
  }
}

export default FilterProjects;