import React, { useState, useEffect } from 'react';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import './homePage.css'
import { Link } from 'react-router-dom';


export const HostelListing = props => {
  const [hostels, setHostels] = useState([]);
  const apiClient = new HostelHopperAPIClient(); 
  
  useEffect(() => {
    onSearch();
  });
  
  let onSearch = params => {
    apiClient.getAllHosts(params).then(x => {
      setHostels(x.info);
    });
  }
  


  
  if (!hostels || hostels.length === 0) {
    return <div>Loading...</div>
  }
  return <>
  <div className="background2">
    <ul id = "hostel-list">
  {
        hostels.map(hostel => <div key = {hostel.id} className="card" id="listing">
   
        <h3 className="hostelName" >{hostel.title}</h3>
   
        <img src={hostel.image_url} alt="Avatar" className="avatar" id="hostelImage"></img>
      
        <div className="card-body">
          <h5 className="card-title">Price / Night:{hostel.price}</h5>
          <p className="card-text">{hostel.body}</p>
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