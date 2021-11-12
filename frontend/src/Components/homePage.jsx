import React from 'react';
import './login.css'
import { Redirect, Link } from 'react-router-dom';

import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import './homePage.css'
import logo from '../logo.png';



export class HomePage extends React.Component {

    apiClient = new HostelHopperAPIClient(); 


    render(){
        return <>
        <div className="background">
            <div id="homePageHeader">
            Avaliable Hostels 
            </div >

<img src={logo} alt="Avatar" className="avatar" id="cornerLogo"></img>

            <div class="input-group rounded" id="searchBar">
  <input type="search" class="form-control rounded" placeholder="Search by city..." aria-label="Search"
  aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>



        </div> 
               
        

        </>
    }
}
export default HomePage;