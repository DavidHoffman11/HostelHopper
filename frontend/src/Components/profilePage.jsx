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
        <div>Profile Page</div>
        </> 
    }
}
export default ProfilePage;