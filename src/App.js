import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <Work />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
