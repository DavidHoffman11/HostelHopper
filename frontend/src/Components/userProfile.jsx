
import React from 'react';
import './login.css'
import './profilePage.css'
import { Link } from 'react-router-dom';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import {User} from '../Models/user';



export class UserProfile extends React.Component {
       apiClient = new HostelHopperAPIClient(); 

    state = {
        User: new User(
        0,
        "John",
        "johnjohansson@gmail.com",
        "password",
        "https://via.placeholder.com/150"
        ),
    }


    render(){
        //const { User } = this.state;
        return( <div id="background">
            <div id="homePageHeader">
                User Profile
            </div>
            
          
                <div id="backToHomepage">
                    
                    <h4 id="headerText">Not what you're looking for?</h4>
                   
                   <Link to={'homepage'}>
                                <button className="btn btn-primary btn-lg mb-7 " type="button">Browse more Hostels</button>
                            </Link>
                            </div>
          
            
            <div id="fullProfile" className="container informationContainer py-5 mb-3 ">
                <img src={this.state.User.profilePicUrl} alt="What the hostel looks like" ></img>
                <h2>Username</h2>
                <p id="smallFont">{this.state.User.username}</p>
                <h2>Email Address</h2>
                <p id="smallFont">{this.state.User.email}</p>
                
            </div>

            <div className="pb-5">
                        
                <Link to={'updateUser'}>
                    <button className="btn btn-primary btn-lg mb-7 btn-block" type="button" id="registerButton">Update User</button>
                </Link>
                            
            </div>
            
        </div>
        )
    }
}
export default UserProfile;

