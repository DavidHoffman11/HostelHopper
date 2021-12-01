import React, { useState, useEffect, onSearch } from 'react';
import './login.css'
import './profilePage.css'
import { Redirect, Link } from 'react-router-dom';
import logo from '../logo.png';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import { LoginButton, ErrorMessage } from './loginButton';
import {Hostel} from '../Models/hostel';
import { ReviewList } from './reviewList';
import ReviewForm from './reviewForm';



export const ProfilePage = props => {

    let [hostel, setHostel] = useState(undefined);
    let apiClient = new HostelHopperAPIClient();

    useEffect(() => {
        onSearch();
    }, []);

    let onSearch = params => {
        HostelHopperAPIClient.getHostel(params).then(x => setHostel(x));
    }

    hostel = {
        Hostel: new Hostel(
        1, 
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

    if (hostel.id === 0){
        return <div>Loading...</div>
    }

    let addReview = review => {
        hostel.reviews.push(review);
        hostel.reviewAvg = hostel.getAvg(hostel.reviews);
        setHostel(review);
    }

    

    return( <div id="background">
        <div id="homePageHeader">
            {hostel.hostelName}
        </div>
        <div id="navBar" className="container mb-3">
            <div className="row border border-dark">
                <div className="col-8 border-right border-dark">Menu bar</div>
                <div className="col-auto border-left border-dark">
                    <Link to={'homepage'}>
                        <button className="btn btn-primary btn-lg mb-7 btn-block" type="button">Browse</button>
                    </Link>
                </div>
            </div>
        </div>
        
        <div id="fullProfile" className="container informationContainer py-5 mb-3">
            <img src={hostel.profilePicUrl} alt="picture"></img>
            <h1>Bio</h1>
            <p>{hostel.info}</p>
            <p>We offer rooms in the following price range: ${hostel.pricing}</p>
            <p>{hostel.salesPitch}</p>
            <h1>Hostel Features</h1>
            <p>{hostel.foodInfo}</p>
            <p>{hostel.livingOptions}</p>
            <h1>This Hostel...</h1>
            <ul>
                {(hostel.isPetFriendly) && <li>is pet friendly</li>}
                {(!hostel.isPetFriendly) && <li>is NOT pet friendly</li>}

                {(hostel.isCovidSafe) && <li>is COVID safe</li>}
                {(!hostel.isCovidSafe) && <li>is NOT COVID safe</li>}

                {(hostel.hasLockers) && <li>has lockers for secure guest storage</li>}
                {(!hostel.hasLockers) && <li>does NOT have lockers for secure guest storage</li>}

                {(hostel.hasGenderedRoom) && <li>has gendered rooms</li>}
                {(!hostel.hasGenderedRoom) && <li>does NOT gendered rooms</li>}

            </ul>
        </div>
        <div className="container px-0">
            <ReviewList reviews={hostel.reviews}/>
            <div className="bottom-padding"></div>
            <ReviewForm onReviewAdded= {review => addReview(review)} />
        </div>
        
    </div>
    )

}
export default ProfilePage;