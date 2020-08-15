import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Container from 'react-bootstrap/Container'
import Navs from './components/Navs'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Navs />
      <Switch>
        <Route exact path='/about' component={About} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
