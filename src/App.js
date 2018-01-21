import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';

import preload from './data';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={props => {
          return <Home projects={preload.projects} {...props} />;
        }}
      />
      <Route
        path="/projects/:id"
        component={props => {
          // Find the project to pass into ProjectDetails component
          const selectedProject = preload.projects.find(
            project => props.match.params.id === project.id
          );
          return <ProjectDetails project={selectedProject} {...props} />;
        }}
      />
      )} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default App;
