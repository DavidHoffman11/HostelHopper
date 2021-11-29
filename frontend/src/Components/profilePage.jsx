import React from 'react';
import './login.css'
import './profilePage.css'
import { Redirect, Link } from 'react-router-dom';
import logo from '../logo.png';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import { LoginButton, ErrorMessage } from './loginButton';
import {Hostel} from '../Models/hostel';
import { ReviewList } from './reviewList';
import ReviewForm from './reviewForm';



export class ProfilePage extends React.Component {
    addReview(review){
        this.state.Hostel.reviews.push(review);
        this.state.Hostel.reviewAvg = this.state.Hostel.getAvg(this.state.Hostel.reviews);
        this.setState({product: this.state.product});
    }
    state = {
        Hostel: new Hostel(
        0, 
        "Big Cabana Resort", 
        "It is a nice place", 
        "https://johnlawrimore.com/smu/101.png",
        1000, 
        "it is cool", 
        "we have good food", 
        "living options",
        "big oceanside view", 
        true, 
        true, 
        "California", 
        true, 
        true, 
        []
        ),
    }

    apiClient = new HostelHopperAPIClient(); 

    render(){
        const { Hostel } = this.state;
        return( <div>
            <div className="container mb-3">
                <div className="row border border-dark">
                    <div className="col-8 border-right border-dark">Menu bar</div>
                    <div className="col-auto border-left border-dark">Browse</div>
                </div>
            </div>
            
            <div id="fullProfile" className="container bg-light py-5 mb-3 rounded">
                <img className="float-right" src={this.state.Hostel.profilePicUrl} alt="picture"></img>
                <p id="hostelName" className="float-none">{this.state.Hostel.hostelName}</p>
                <h1>Bio</h1>
                <p>{this.state.Hostel.info}</p>
                <p>We offer rooms in the following price range: ${this.state.Hostel.pricing}</p>
                <p>{this.state.Hostel.salesPitch}</p>
                <h1>Hostel Features</h1>
                <p>{this.state.Hostel.foodInfo}</p>
                <p>{this.state.Hostel.livingOptions}</p>
                <h1>This Hostel...</h1>
                <ul>
                    {
                        (this.state.Hostel.isPetFriendly) && <li>is pet friendly</li>
                    }
                    {
                        (this.state.Hostel.isCovidSafe) && <li>is COVID safe</li>
                    }
                    {
                        (this.state.Hostel.hasLockers) && <li>has lockers for secure guest storage</li>
                    }
                    {
                        (this.state.Hostel.hasGenderedRoom) && <li>has gendered rooms</li>
                    }
                </ul>
            </div>
            <div className="container">
                <ReviewList reviews={this.state.Hostel.reviews}/>
                <div className="bottom-padding"></div>
                <ReviewForm onReviewAdded= {review => this.addReview(review)} />
            </div>
            
        </div>
        )
    }
}
export default ProfilePage;