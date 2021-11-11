import React from 'react';
import './login.css'
import { Redirect, Link } from 'react-router-dom';
import logo from '../logo.png';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import { LoginButton, ErrorMessage } from './loginButton';

export class ProfilePage extends React.Component {

    apiClient = new HostelHopperAPIClient(); 

    render(){
        return <>
            <p className="container">Profile Page</p>
            <div id="fullProfile" className="container bg-light">
                <div className="row border border-dark p-0">
                    <div className="col-8 border-right border-dark">Menu bar</div>
                    <div className="col-auto border-left border-dark">Browse</div>
                </div>
                <img className="float-left" src="https://via.placeholder.com/150" alt="picture"></img>
                <h1>Bio</h1>
                <p>Insert bio here</p>
            </div>
        </>
    }
}
export default ProfilePage;