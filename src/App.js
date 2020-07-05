import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from "./components/Home";
import AddItem from './components/AddItem';
import Navbar from './components/Navbar';
import MenuList from './components/MenuList'


function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={MenuList} />
          <Route path='/add-item' exact component={AddItem} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
