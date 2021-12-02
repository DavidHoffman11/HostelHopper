import React, { useState, useEffect, onSearch } from 'react';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import './homePage.css'
import placeHolder from '../img_placeHolder.png';
import { Link } from 'react-router-dom';
import Hostel from '../Models/hostel';


export const HostelListing = props => {
  const [hostels, setHostels] = useState([]);
  const apiClient = new HostelHopperAPIClient(); 
  
  useEffect(() => {
    onSearch();
  }, []);
  
  let onSearch = params => {
    apiClient.getAllHosts(params).then(x => setHostels(x));
    console.log(hostels);
  }
  
  

  
  if (!hostels){
    return <div>Loading...</div>
  }
  return <>
  <div className="background2">
    <ul id = "hostel-list">
  {
        hostels.map(hostel => <div key = {hostel.id} className="card" id="listing">
   
        <h3 class="hostelName" >{hostel.hostelName}</h3>
   
        <img src={hostel.profilePicUrl} alt="Avatar" className="avatar" id="hostelImage"></img>
      
        <div class="card-body">
          <h5 class="card-title">Price / Night:{hostel.pricing}</h5>
          <p class="card-text">{hostel.info}</p>
          <Link to={ `homepage/${hostel.id}` }>
          <a href="#" class="btn btn-primary">View this hostel</a>
          </Link>
        </div>
      </div>)
      }
      </ul>
      </div>
      </>
    };


export default HostelListing;