import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Components/GlobalStyle.js';
import Menu from './Components/Menu/Menu.jsx';
import Curso from './Pages/Curso.jsx';
import Home from './Pages/Home.jsx';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/curso' component={Curso} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
