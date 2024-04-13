import React from 'react';
import Navbar from '../Components/Navbar';
import '../index.css';
import CrewmateDetails from '../Components/CrewmateDetails';

function CrewmateDetailsView(){
    return(
        <div className="app-container">
        <div className="sidebar">
            <Navbar />
        </div>
        <div className="main-content">
            <CrewmateDetails/>
        </div>
        </div>
    )
}
export default CrewmateDetailsView;