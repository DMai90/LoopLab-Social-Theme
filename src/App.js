import React, { Component } from 'react';
import Navbar from './components/layout/Navbar.js';
import HomeSection from './components/layout/HomeSection';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HomeSection />
      </div>
    );
  }
}

export default App;
