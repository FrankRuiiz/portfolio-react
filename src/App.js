import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <Work />
        <About />
      </div>
    );
  }
}

export default App;
