import React from 'react';
import './login.css'
import { Redirect, Link } from 'react-router-dom';
import logo from '../logo.png';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import { LoginButton, ErrorMessage } from './loginButton';
import {Hostel} from '../Models/hostel';
import { ReviewList } from './reviewList';

export class ProfilePage extends React.Component {
    state = {
        Hostel: new Hostel(0, 
            "Big Cabana Resort", 
            "It is a nice place", 
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.summerwood.com%2Fproducts%2Fpool-cabanas%2Fsanara%2F231646&psig=AOvVaw37HlCLJd8Sj0S4PZtcKoaO&ust=1636763441502000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjH347JkfQCFQAAAAAdAAAAABAD",
        1000, 
        "it is cool", 
        "we have good food", 
        "big oceanside view", 
        true, 
        true, 
        "California", 
        true, 
        true, 
        []),
    }

    apiClient = new HostelHopperAPIClient(); 

    render(){
        return <>
            <p className="container">Hostel Profile Page</p>
            <div id="fullProfile" className="container bg-light">
                <div className="row border border-dark p-0">
                    <div className="col-8 border-right border-dark">Menu bar</div>
                    <div className="col-auto border-left border-dark">Browse</div>
                </div>
                <img className="float-left" src="https://via.placeholder.com/150" alt="picture"></img>
                <h1>Bio</h1>
                <p>Insert bio here</p>
                <ReviewList reviews={this.state.Hostel.reviews}/>
            </div>
        </>
    }
}
export default ProfilePage;