import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsList from './components/ProjectsList'
import GithubComponent from './components/GithubComponent'

class App extends Component {

  render() {

    return (
      <div className='App'>
        {/* <ProjectsList /> */}
        <GithubComponent />
      </div>
    )
  }
}

export default App;
