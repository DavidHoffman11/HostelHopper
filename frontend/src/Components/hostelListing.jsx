import React, { useState, useEffect } from 'react';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import './homePage.css'
import placeHolder from '../img_placeHolder.png';
import { Link } from 'react-router-dom';
import Hostel from '../Models/hostel';


export const HostelListing = props => {
  let hostels = [];
  const apiClient = new HostelHopperAPIClient(); 
  
  useEffect(() => {
    onSearch();
  });
  
  let onSearch = params => {
    var hostels;
    apiClient.getAllHosts().then(x => hostels = x);
    console.log();
  }
  
  

  
  if (!hostels){
    return <div>Loading...</div>
  }
  return <>
  <div className="background2">
    <ul id = "hostel-list">
  {
        hostels.map(hostel => <div key = {hostel.id} className="card" id="listing">
   
        <h3 className="hostelName" >{hostel.hostelName}</h3>
   
        <img src={hostel.profilePicUrl} alt="Avatar" className="avatar" id="hostelImage"></img>
      
        <div className="card-body">
          <h5 className="card-title">Price / Night:{hostel.pricing}</h5>
          <p className="card-text">{hostel.info}</p>
          <Link to={ `homepage/${hostel.id}` }>
          <a href="#" className="btn btn-primary">View this hostel</a>
          </Link>
        </div>
      </div>)
      }
      </ul>
      </div>
      </>
    };


export default HostelListing;