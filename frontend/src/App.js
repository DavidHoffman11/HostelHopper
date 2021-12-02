import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Login from './Components/login';
import RegisterUser from './Components/registerUser';
import UpdateUser from './Components/updateUser';
import UpdateHostel from './Components/updateHostel';
import RegisterHost from './Components/registerHost';
import ProfilePage from './Components/profilePage';
import HomePage from './Components/homePage';
import HostelListing from './Components/hostelListing';
import HostelProfile from './Components/hostelProfile';
import { UserProfile } from './Components/userProfile';

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

          <Route path="/updateUser/:id" component={UpdateUser}></Route>

          <Route path="/updateHostel/:id" component={UpdateHostel}></Route>

          <Route path="/userProfile">
            <UserProfile />
          </Route>

          <Route path="/hostelProfile/:id" component={HostelProfile}></Route>

          <Route path="/registerHost">
            <RegisterHost />
          </Route>
          <Route exact path="/homepage/:id/:hostid" component={ProfilePage}></Route>
         <Route path="/homepage/:id" component={HomePage}></Route>
          <Route path="/profile/:id" component={UserProfile}></Route>

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
