import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Components/GlobalStyle.js';
import Menu from './Components/Menu/Menu.jsx';
import Curso from './Pages/Curso/Curso.jsx';
import CursoLista from './Pages/Curso/CursoLista.jsx';
import CursoNovo from './Pages/Curso/CursoNovo.jsx';
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
          <Route path='/curso-lista' component={CursoLista} />
          <Route path='/curso-novo' component={CursoNovo} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
