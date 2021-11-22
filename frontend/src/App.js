import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Login from './Components/login';
import RegisterPage from './Components/register';
import ProfilePage from './Components/profilePage';
import HomePage from './Components/homePage';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
            </Route>
         <Route path="/homepage">
            <HomePage />
          </Route>
          </Switch>
        </Router>
      </>
    );
  }

//   ROUTES = [
//     { path: '/register', component: RegisterPage },
//     { path: '/', component: Login },
//     { path: '/profile', component: ProfilePage },
// ]

}

export default App;
