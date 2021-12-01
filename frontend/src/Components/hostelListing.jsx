import React from 'react';

import './homePage.css'
import placeHolder from '../img_placeHolder.png';

export class HostelListing extends React.Component {

 

    render(){
        return <>

<div className="background">
        <div class="card" id="listing">
        <div class="card-header">
        <h3 class="card-title">Hostel Name</h3>
        </div>
        <img src={placeHolder} alt="Avatar" className="avatar" id="hostelImage"></img>
      
        <div class="card-body">
          <h5 class="card-title">Price / Night</h5>
          <p class="card-text">This is an awesome place to say! All rooms include A/C, free wifi and a lots of outlets.</p>
          <a href="#" class="btn btn-primary">See reviews</a>
        </div>
      </div>

</div>
      </>
    }
}

export default HostelListing;