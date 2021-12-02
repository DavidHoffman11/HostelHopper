import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

import './homePage.css'
import logo from '../logo.png';
import HostelListing from './hostelListing';

export class HomePage extends React.Component {
  state = {
    filter: "",
  }
  



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

            <select id="filters" name="filters" value={this.state.filter} onChange={e => this.setState({filter: e.target.value})}>
            <option value=""></option>
              <option value="Pet Friendly">Pet Friendly</option>
              <option value="Price">Price(Lowest to Highest)</option>
              <option value="Has Lockers">Has Lockers</option>
              <option value="COVID-Safe">COVID-Safe</option>
              <option value="Gender-Separated">Gender-Separated</option>
              </select>
            <span className="input-group-text border-0" id="search-addon">
              </span>
          </div>
        </div> 
        <HostelListing userID ={this.props.match.params.id} filter ={this.state.filter}/>

        
      </>
    }
}
export default HomePage;