import React from 'react';

import './App.css';

import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/add-item' exact component={AddItem} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
