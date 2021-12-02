
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
        "https://i.pinimg.com/474x/ee/60/0b/ee600b5178e4f1648fd1e8623f049611.jpg"
        ),
    }


    render(){
        //const { User } = this.state;
        return( <div id="background">
            <div id="homePageHeader">
                User Profile
            </div>
            
          
                <div id="backToHomepage">
                    
                    <h4 id="headerText">Planning a trip?</h4>
                   
                   <Link to={'homepage'}>
                                <button className="btn btn-primary btn-lg mb-7 " type="button">Browse Hostels</button>
                            </Link>
                            </div>
          
            
            <div id="fullProfile" className="container informationContainer py-5 mb-3 ">

                <img src={this.state.User.profilePicUrl} alt="picture" id="userPic"></img>
              
              <div id="userProfileBody">
                <h2 id="largeFont2">Username:</h2>
                <p id="slogan">{this.state.User.username}</p>
                <h2 id="largeFont2">Email Address:</h2>
                <p id="slogan">{this.state.User.email}</p>
                </div>


                <Link to={'updateUser'}>
                    <button className="btn btn-primary btn-lg mb-7 btn-block"  type="button" id="userUpdate"> Edit profile information</button>
                </Link>
               
            </div>

  
                        
               
          
            
        </div>
        )
    }
}
export default UserProfile;

