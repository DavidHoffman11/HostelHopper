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
            <Link to="/">
            <button className="btn btn-primary btn-lg mb-7 " type="button">Log Out</button>
            </Link>
          <Link to={ `/profile/${this.props.match.params.id}` }>
                                <button className="btn btn-primary btn-lg mb-7 " type="button" id="backToProfile">Go to my Profile</button>
                            </Link>
            Avaliable Hostels 
          </div >

          <img src={logo} alt="Avatar" className="avatar" id="cornerLogo"></img>

          <div className="input-group rounded" id="searchBar">

            <select id="filters" class="filterBar" name="filters" value={this.state.filter} onChange={e => this.setState({filter: e.target.value})}>
            <option value="" >Filter by...</option>
              <option value="Pet Friendly">Pet Friendly Hostels</option>
              <option value="Price"> Price(Lowest to Highest)</option>
              <option value="Has Lockers">Hostels with lockers</option>
              <option value="COVID-Safe">COVID-Safe Hostels</option>
              <option value="Gender-Separated">Gender-Separated Hostels</option>
              </select>
           
          </div>

        
       
        <HostelListing userID ={this.props.match.params.id} filter ={this.state.filter}/>
</div>
        
      </>
    }
}
export default HomePage;