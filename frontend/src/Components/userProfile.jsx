import React from 'react';
import './login.css'
import './profilePage.css'
import { Link } from 'react-router-dom';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import {User} from '../Models/user';

export class UserProfile extends React.Component {
       apiClient = new HostelHopperAPIClient(); 

    state = {
        User: new User( ),
    }

    render(){
        //const { User } = this.state;
        return( <div id="background">
            <div id="homePageHeader">
                User Profile
            </div>
            
          
                <div id="backToHomepage">
                    
                    <h4 id="headerText">Planning a trip?</h4>
                   
                    <Link to={ `/homepage/${this.props.match.params.id}` }>
                                <button className="btn btn-primary btn-lg mb-7 " type="button">Browse Hostels</button>
                                <Link to="/">
            <button className="btn btn-primary btn-lg mb-7 " type="button">Log Out</button>
            </Link>
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


                <Link to={`/updateUser/${this.props.match.params.id}`}>
                    <button className="btn btn-primary btn-lg mb-7 btn-block"  type="button" id="userUpdate"> Edit profile information</button>
                </Link>
               
            </div>

  
                        
               
          
            
        </div>
        )
    }
    componentDidMount() {
        let profid = this.props.match.params.id;
        if (profid){
          this.apiClient.getUserInfo(profid)
          .then(user => {
              let page = user.info[0];
              this.setState({User: new User(page.id, page.name, page.email, page.password, page.image_url)});
        }
        );
        }
      }
}
export default UserProfile;

