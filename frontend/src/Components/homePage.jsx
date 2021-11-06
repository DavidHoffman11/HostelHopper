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
        <div class="background">
            <div id="homePageHeader">
            Avaliable Hostels 
            </div >
                <div class="Listing">
                <img  src= {propertyImage} alt="Picture" className="Picture"/>
                 </div>
                 <h3 id="propertyName">Property Name</h3>
                 <div>
                     <p>This is a beautiful property. Our hostel is located right near the back and has 
                         many amentities like a pool, clean towels, and wifi. We would love for you to 
                         stay with us!
                     </p>
                 </div>
                 <div> 
                     <span>"$50 / night</span>
                 </div>
                 <div> 
                    <button type="button" > Click here to learn more!</button>
                 </div>
        
         

        

        </div>
        </>
    }
}
export default HomePage;