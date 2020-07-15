import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from "./components/Home";
import AddItem from './components/AddItem';
import NavigationBar from './components/NavigationBar';
import MenuList from './components/MenuList'
import Login from './components/Login'
import SignUp from './components/SignUp'
import UpdateItem from './components/UpdateItem'


function App() {
  return (
    <div className="App">
      <Router>
        
        <NavigationBar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={MenuList} />
          <Route path='/add-item' exact component={AddItem} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={SignUp} />
          <Route path='/update-form/:id' exact component={UpdateItem} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
