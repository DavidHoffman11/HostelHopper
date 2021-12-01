import React from 'react';

import './homePage.css'
import placeHolder from '../img_placeHolder.png';
import {Hostel} from '../Models/hostel';
import './profilePage'

export class HostelListing extends React.Component {

 
  state = {
    Hostel: new Hostel(
    0, 
    "Big Cabana Resort", 
    "Info / slogan", 
    "https://johnlawrimore.com/smu/101.png",
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
    "75206",
    ),
}
  

    render(){
        return <>

<div className="background2">
        <div class="card" id="listing">
   
        <h3 class="hostelName" >{this.state.Hostel.hostelName} - {this.state.Hostel.location}</h3>
   
        <img src={this.state.Hostel.profilePicUrl} alt="Avatar" className="avatar" id="hostelImage"></img>
      
        <div class="card-body">
          <h5 class="card-title">Price / Night: ${this.state.Hostel.pricing}</h5>
          <p class="card-text">{this.state.Hostel.info}</p>
          <a href="#" class="btn btn-primary">View this hostel</a>
        </div>
      </div>

</div>
      </>
    }
}

export default HostelListing;