import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear
*/
let techlistStatus = `techlist--hidden`

class ShowHideTech extends Component {

  constructor() {
    super();

    this.state = {
      isClicked: false,
      textClicked: "+Show Tech",
      };
    }

  toggleElements= () => {

    if(this.state.isClicked === false) {
      this.setState({
        textClicked: "- Hide Tech",
        isClicked: true
      });
      techlistStatus = "techlist";

    } else {

      this.setState({
        textClicked: "+ Show Tech",
        isClicked: false
      });
      techlistStatus = `techlist--hidden`;
    }
  }

  render() {



    return (
      <section>
        <h4>Technologies</h4>
        <button className="toggle-techlist" onClick={ this.toggleElements }>{ this.state.textClicked }</button>

        <div className={`techlist ${techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge"></span>
          <span className="techlist__icon devicons devicons-git"></span>
          <span className="techlist__icon devicons devicons-html5"></span>
          <span className="techlist__icon devicons devicons devicons-css3"></span>
          <span className="techlist__icon devicons devicons-sass"></span>
          <span className="techlist__icon devicons devicons-linux"></span>
          <span className="techlist__icon devicons devicons devicons-nodejs"></span>
          <span className="techlist__icon devicons devicons devicons-react"></span>
          <span className="techlist__icon devicons devicons devicons-illustrator"></span>
        </div>
      </section>
    );
  }
}

export default ShowHideTech;

