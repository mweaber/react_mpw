import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
// import Container from 'react-bootstrap/Container'
import Navs from './components/Navs';
import About from './pages/About'
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
      <BrowserRouter>
        <Navs />
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
