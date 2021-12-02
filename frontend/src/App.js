import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Login from './Components/login';
import RegisterUser from './Components/registerUser';
import RegisterHost from './Components/registerHost';
import ProfilePage from './Components/profilePage';
import HomePage from './Components/homePage';
import HostelListing from './Components/hostelListing';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>

          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/registerUser">
            <RegisterUser />
          </Route>

          <Route path="/registerHost">
            <RegisterHost />
          </Route>

          <Route path="/profile">
            <ProfilePage />
            </Route>
         <Route path="/homepage">
            <HomePage />
            <HostelListing />
          </Route>

          <Route path="/homepage/:id">
            <ProfilePage />
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
