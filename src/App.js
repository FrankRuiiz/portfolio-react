import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <Work />
      </div>
    );
  }
}

export default App;
