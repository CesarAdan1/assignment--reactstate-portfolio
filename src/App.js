import React, { Component } from 'react';
import ShowHideTech from  './components/ShowHideTech.js';
import FilterProjects from './components/FilterProjects.js'

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <ShowHideTech />
        
      </div>
    );
  }
}

export default App;
