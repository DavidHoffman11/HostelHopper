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


export class HostelProfile extends React.Component {

       apiClient = new HostelHopperAPIClient(); 
  
    addReview(review){
        this.state.Hostel.reviews.push(review);
        this.state.Hostel.reviewAvg = this.state.Hostel.getAvg(this.state.Hostel.reviews);
        this.setState({Hostel: this.state.Hostel});
    }
    state = {
        Hostel: new Hostel(
        0, 
        "Bungalow", 
        "Info / slogan", 
        "",
        1000, 
        "Natural, environmentally conscious, sustainable: our BIO HOTELS have been operating consistently ecologically since 2001 and are constantly developing. Today we are the most sustainable hotel association on the market. We offer you the ultimate sustainable experiences in the hotel industry: certified organic quality and maximum transparency in the most beautiful European cities and regions, from the car-free North Sea island to historic Rome to sun-kissed Greece.", 
        "we have good food", 
        "living options",
        "here is a nearby Attraction!", 
        true, 
        true, 
        "Lost Angeles, California", 
        true, 
        true, 
        [],
        123456,
        "75206",
        ),
    }


    render(){
        if (this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        if (this.state.Hostel.id === 0){
            return <div>Loading....</div>
        }
        return( <div id="profBackground">
            <div id="homePageHeader">
                My Hostel
               
            </div>
            <div id="backToHomepage">
            <Link to="/">
            <button className="btn btn-primary btn-lg mb-7 " type="button">Log Out</button>
            </Link>
                </div>

          
                
          
            
            <div id="fullProfile" className="container informationContainer py-5 mb-3">
                <img src={this.state.Hostel.profilePicUrl} alt="picture" ></img>
                

               
                <p id="largeFont" > {this.state.Hostel.hostelName}</p>
                <p id="slogan" >{this.state.Hostel.info}</p>
                <div id="locationAndPrice">
                <p id="subFont">Stay in <p id="largeFont">{this.state.Hostel.location}</p> for < p id="largeFont">${this.state.Hostel.pricing}</p> /night</p>
                </div>
                <p id="smallFont"> Located in Zip Code <p id="medFont">{this.state.Hostel.zipCode}</p></p>
                <h2>Description</h2>
                <p id="smallFont">{this.state.Hostel.salesPitch}</p>
                <h2>During your stay</h2>
                <p id="smallFont">FOOD: {this.state.Hostel.foodInfo}</p>
                <p id="smallFont">LIVING OPTIONS: {this.state.Hostel.livingOptions}</p>
                <p id="smallFont">NEARBY ATTRACTIONS: {this.state.Hostel.attractions}</p>
               
               <div >
                <h2>Features</h2>
                <ul id="smallFont">
                    {(this.state.Hostel.isPetFriendly) && <li>is pet friendly</li>}
                    {(!this.state.Hostel.isPetFriendly) && <li>is NOT pet friendly</li>}

                    {(this.state.Hostel.isCovidSafe) && <li>is COVID safe</li>}
                    {(!this.state.Hostel.isCovidSafe) && <li>is NOT COVID safe</li>}

                    {(this.state.Hostel.hasLockers) && <li>has lockers for secure guest storage</li>}
                    {(!this.state.Hostel.hasLockers) && <li>does NOT have lockers for secure guest storage</li>}

                    {(this.state.Hostel.hasGenderedRoom) && <li>has gendered rooms</li>}
                    {(!this.state.Hostel.hasGenderedRoom) && <li>does NOT gendered rooms</li>}

                </ul>

           
            </div>

            <Link to={`/updateHostel/${this.state.Hostel.id}`}>
                    <button className="btn btn-primary btn-lg mb-7 btn-block"  type="button" id="hostelUpdate"> Edit hostel information</button>
                </Link>
               
           
            </div>
            
        </div>
        )
    }

    componentDidMount() {
        let hostid = this.props.match.params.id;
        if (hostid){
          this.apiClient.getHost(hostid)
          .then(hostel => {
              let page = hostel.info[0];
              this.setState({Hostel: new Hostel(page.id, page.name, page.slogan, page.image_url, page.price, page.body, page.food_info, page.living_options, page.attrations, page.is_pet_friendly, page.is_covid_safe, page.location, page.has_lockers, page.has_gendered_rooms, [], page.zip_code)});
        }
        );
        }
      }

}
export default HostelProfile;
