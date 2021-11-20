import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
