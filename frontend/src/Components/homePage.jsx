import React from 'react';
import './login.css'
import { Redirect, Link } from 'react-router-dom';
import logo from '../logo.png';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import { LoginButton, ErrorMessage } from './loginButton';

import './homePage.css'
import propertyImage from '../img_placeHolder.png';



export class HomePage extends React.Component {

    apiClient = new HostelHopperAPIClient(); 

    render(){
        return <>
        <div className="background">
            <div id="homePageHeader">
            Avaliable Hostels 
            </div >
               
               
            <div className="card mb-3">
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
        
         

        

        </div>
        </>
    }
}
export default HomePage;