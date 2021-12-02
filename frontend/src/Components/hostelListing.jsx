import React, { useState, useEffect } from 'react';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import './homePage.css'
import { Link } from 'react-router-dom';


export const HostelListing = props => {
  let profID = props.userID;
  let filter = props.filter;

  const [hostels, setHostels] = useState([]);
  const apiClient = new HostelHopperAPIClient(); 
  
  useEffect(() => {
    onSearch();
  });
  
  let onSearch = params => {   
  if (filter === "Price"){
    apiClient.getPriceHosts(params).then(x => {
      setHostels(x.info);
    });
  }
  if (filter === "Pet Friendly"){
    apiClient.getPetHosts(params).then(x => {
      setHostels(x.info);
    });
  }
  if (filter === "COVID-Safe"){
    apiClient.getCovidSafeHosts(params).then(x => {
      setHostels(x.info);
    });
  }
  if (filter === "Gender-Separated"){
    apiClient.getGenderHosts(params).then(x => {
      setHostels(x.info);
    });
  }
  if (filter === "Has Lockers"){
    apiClient.getLockerHosts(params).then(x => {
      setHostels(x.info);
    });
  }
  else{
    if(filter === ""){
      apiClient.getAllHosts(params).then(x => {
        setHostels(x.info);
      });
    }
  }
}


  

  if (!hostels || hostels.length === 0) {
    return <div>Loading...</div>
  }
  return <>
  <div className="background2">
    <ul id = "hostel-list">
  {
        hostels.map(hostel => <div key = {hostel.id} className="card" id="listing">
   
        <h3 className="hostelName" id="largeFont">{hostel.name}</h3>
        <p id="slogan">Located in {hostel.location}</p>
        <img src={hostel.image_url} alt="Avatar" className="avatar" id="hostelImage"></img>
      
        <div className="card-body">
          <h5 className="card-title" id="medFont">Price Per Night: ${hostel.price}</h5>
          <p className="card-text" id="smallFont">"{hostel.slogan}"</p>
          <Link to={ `/homepage/${profID}/${hostel.id}` }>
          <a href="#" className="btn btn-primary">See hostel details</a>
          </Link>
        </div>
       
      </div>)
      }
      </ul>
      
     
      
      </div>

      </>
    };
    


export default HostelListing;