import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsList from './ProjectsList'

class App extends Component {

  render() {

    return (
      <div className='App'>
        <ProjectsList />
      </div>
    )
  }
}

export default App;
