import React from 'react';

import './homePage.css'
import placeHolder from '../img_placeHolder.png';

import Hostel from '../Models/hostel';


export class HostelListing extends React.Component {

 
state={
  hostel:{
    info:'sampleDescription',
    hostelName:"sampleName", 
    profilePicUrl:placeHolder, 
    pricing:'samplePrice', 
  }
  };
  

    render(){
        return <>

<div className="background2">
        <div class="card" id="listing">
   
        <h3 class="hostelName" >{this.state.hostel.hostelName}</h3>
   
        <img src={this.state.hostel.profilePicUrl} alt="Avatar" className="avatar" id="hostelImage"></img>
      
        <div class="card-body">
          <h5 class="card-title">Price / Night:{this.state.hostel.pricing}</h5>
          <p class="card-text">{this.state.hostel.info}</p>
          <a href="#" class="btn btn-primary">View this hostel</a>
        </div>
      </div>

</div>
      </>
    }
}

export default HostelListing;