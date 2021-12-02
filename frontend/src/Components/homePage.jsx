import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

import './homePage.css'
import logo from '../logo.png';
import HostelListing from './hostelListing';

export class HomePage extends React.Component {



    render(){
        return <>

        <div className="background">
          <div id="homePageHeader">
          <Link to={ `/profile/${this.props.match.params.id}` }>
                                <button className="btn btn-primary btn-lg mb-7 " type="button">Profile</button>
                            </Link>
            Avaliable Hostels 
          </div >

          <img src={logo} alt="Avatar" className="avatar" id="cornerLogo"></img>

          <div className="input-group rounded" id="searchBar">

            <input type="search" className="form-control rounded" placeholder="Search by city..." aria-label="Search"
              aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"> Search</i>
              </span>
          </div>
        </div> 
        <HostelListing userID ={this.props.match.params.id}/>

        
      </>
    }
}
export default HomePage;