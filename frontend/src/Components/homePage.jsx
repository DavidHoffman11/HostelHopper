import React from 'react';
import './login.css'

import './homePage.css'
import logo from '../logo.png';

export class HomePage extends React.Component {



    render(){
        return <>
        <div className="background">
          <div id="homePageHeader">
            Avaliable Hostels 
          </div >

          <img src={logo} alt="Avatar" className="avatar" id="cornerLogo"></img>

          <div className="input-group rounded" id="searchBar">
            <input type="search" className="form-control rounded" placeholder="Search by city..." aria-label="Search"
              aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
              </span>
          </div>
        </div> 
      </>
    }
}
export default HomePage;