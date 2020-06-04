import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPageComponent from './components/LandingPageComponents.js'


class App extends Component {

  render() {

    return (
      <div className='App'>
        <LandingPageComponent />
      </div>
    )
  }
}

export default App;
