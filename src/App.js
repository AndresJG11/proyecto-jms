import React, { Component } from 'react';
import Routes from './Routes';
import Home from './components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Categoria from './components/Categoria.js';


class App extends Component {

  constructor(props){
    super(props)
    
  }

  //<Routes />
  render() {
    return (
      <Routes />
    )
  }


}




export default App;
