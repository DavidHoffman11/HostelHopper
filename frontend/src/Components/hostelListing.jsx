import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css'
import placeHolder from '../img_placeHolder.png';

import Hostel from '../Models/hostel';


export class HostelListing extends React.Component {

 
state={
  hostel:{
    id: 1,
    info:'sampleDescription',
    hostelName:"sampleName", 
    profilePicUrl:placeHolder, 
    pricing:'samplePrice', 
  }
  };
  

    render(){
        return <>

<div className="background2">
        <div className="card" id="listing">
   
        <h3 className="hostelName" >{this.state.hostel.hostelName}</h3>
   
        <img src={this.state.hostel.profilePicUrl} alt="Avatar" className="avatar" id="hostelImage"></img>
      
        <div className="card-body">
          <h5 className="card-title">Price / Night:{this.state.hostel.pricing}</h5>
          <p className="card-text">{this.state.hostel.info}</p>
          <Link className="btn btn-primary" to={`homepage/${this.state.hostel.id}`}>View this hostel</Link>
        </div>
      </div>

</div>
      </>
    }
}

export default HostelListing;